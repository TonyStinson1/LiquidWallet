// import { setActivityAlert } from '../store/slices/activitySlice'
// import { setSessionTimeOutModal } from '../store/slices/authSlice'
import { getProfile } from '../store/slices/profileSlice'
import { AppDispatch } from '../store/store'
import { isFileObject, isNil } from '../utils'

import {
    FetchError,
    FetchPromise,
    FetchResponse,
    IRequestOptions,
    IServerCommunicatorConfig,
    REQUEST_METHOD,
} from './interfaces'

export interface IAPIHeader {
    Authorization: string
    'X-DEVICE-TOKEN': string
}

export type MethodType =
    | 'get'
    | 'options'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK'
    | undefined

export type RequestPayloadType = { [key: string]: unknown } | FormData | null

const DEFAULT_CONFIGURATION: IServerCommunicatorConfig = {
    defaultTimeout: 30000,
    contentType: 'application/json',
    baseRequestConfigCallback: undefined,
    beforeRequestCallback: undefined,
}

const MAX_CONCURRENT_REQUESTS = 10

/**
 * Holds an Fetch instance that is configured to communicate with the backend
 * server and offers an API that manages sending out requests to the backend
 * server and returns the response.
 */
export default class ServerCommunicator {
    /** The instance to make this singleton work. */
    static instance: ServerCommunicator

    // /** The configured Fetch instance. */
    // api!: FetchInstance
    /** The request configuration. */
    config!: IServerCommunicatorConfig
    /** A list of queued requests. */
    requestQueue!: [
        string,
        IServerCommunicatorConfig & IRequestOptions & { method: MethodType; url: string },
        (value: any | PromiseLike<any>) => void,
        (reason?: any) => void
    ][]
    /** Maps the URL and Method to promises of running requests. */
    runningRequests!: { [urlMethod: string]: Promise<any> }

    /**
     * Initialize the Fetch instance and store it as a singleton.
     *
     * @param config The Fetch configuration that will be used to initialize
     * the Fetch instance.
     */
    static applyConfigs = (config: IServerCommunicatorConfig): void => {
        const instance = new ServerCommunicator()
        instance.config = Object.assign({}, instance.config, config || {})
    }

    static dispatch: AppDispatch

    /**
     * Encodes not save characters among the GET parameter values of the
     * given URL.
     *
     * NOTE: The values should have been encoded by whoever set them before
     * the URL ends up here. This is just a patch for now which might break if
     * there is a not-encoded parameter value that contains '?', '&' or '='
     * characters.
     *
     * @param url The URL whichs parameters should be encoded.
     * @returns The same URL with non-save characters in the GET parameters
     * encoded.
     */
    static encodeURLParameterValues = (url: string): string => {
        const [baseURL, urlParameters] = url.split('?')
        const nextURLParameters = urlParameters
            ? urlParameters
                  .split('&')
                  .map((parameterPair) => {
                      const [parameterKey, parameterValue] = parameterPair.split('=')
                      if (parameterKey === 'cursor' || ServerCommunicator.isEncoded(parameterValue)) {
                          return `${parameterKey}=${parameterValue}`
                      }
                      return `${parameterKey}=${encodeURIComponent(parameterValue)}`
                  })
                  .join('&')
            : ''
        return urlParameters ? `${baseURL}?${nextURLParameters}` : baseURL
    }

    static isEncoded = (uri: string): boolean => {
        uri = uri || ''

        return uri !== decodeURIComponent(uri)
    }

    /**
     * Returns the initialized instance if it exists.
     * Otherwise a new server communicator will be instantiated with default
     * configuration, set as the singleton, and returned.
     */
    constructor() {
        if (ServerCommunicator.instance) {
            return ServerCommunicator.instance
        }
        ServerCommunicator.instance = this
        this.config = DEFAULT_CONFIGURATION
        this.requestQueue = []
        this.runningRequests = {}
    }

    /**
     * Strips any GET parameter from the given URL and returns the result.
     *
     * @param url A non-empty string.
     * @returns A string containing everything before the first '?' of the
     * input string.
     */
    getBaseURL = (url: string): string => url.split('?')[0]

    handleFinishedRequest = (requestIdentifier: string): void => {
        // Remove the request that is done.
        delete this.runningRequests[requestIdentifier]
        // Check if there are requests in queue and start the next.
        if (this.requestQueue.length > 0) {
            const [newRequestIdentifier, config, onResolve, onReject] = this.requestQueue.shift() ?? []
            if (!newRequestIdentifier || !config) {
                return
            }
            this.runningRequests[newRequestIdentifier] = this.api?.(config as any)
            // Make sure the requests gets handled properly when done.
            this.runningRequests[newRequestIdentifier]
                .then((response) => {
                    this.handleFinishedRequest(requestIdentifier)
                    if (typeof onResolve === 'function') {
                        onResolve(response)
                    }
                })
                .catch((error) => {
                    this.handleFinishedRequest(requestIdentifier)
                    if (typeof onReject === 'function') {
                        onReject(error)
                    }
                })
        }
    }

    queueAndSendRequest = (
        config: IServerCommunicatorConfig & IRequestOptions & { method: MethodType; url: string }
    ): Promise<any> => {
        // Check if the same request is running
        const { method, url, data } = config
        config.controller = config.controller ?? new AbortController()
        config.signal = config.signal ?? config.controller?.signal

        const manageRequest = (requestIdentifier: string): Promise<any> => {
            if (typeof this.runningRequests[requestIdentifier] !== 'undefined') {
                // Return the promise of the running request.
                return this.runningRequests[requestIdentifier]
            } else if (Object.keys(this.runningRequests).length >= MAX_CONCURRENT_REQUESTS) {
                // Check whether the same request has already been queued.
                const equalRequestIndex = this.requestQueue.findIndex(([requestId]) => requestId === requestIdentifier)
                if (equalRequestIndex > -1) {
                    // If so, change the onResolve to report back to this requester too.
                    const [requestIdentifier, config, oldOnResolve, oldOnReject] = this.requestQueue[equalRequestIndex]
                    return new Promise((onResolve, onReject) => {
                        this.requestQueue[equalRequestIndex] = [
                            requestIdentifier,
                            config,
                            (arg) => {
                                onResolve(arg)
                                oldOnResolve(arg)
                            },
                            (arg) => {
                                onReject(arg)
                                oldOnReject(arg)
                            },
                        ]
                    })
                }
                // Queue the request and return a promise that will resolve,
                //      once the request has been dispatched and resolved.
                //      The returned promise will resolve with the response of the requests.
                return new Promise((onResolve, onReject) => {
                    this.requestQueue.push([requestIdentifier, config, onResolve, onReject])
                })
            } else {
                // Dispatch the request and return its promise.
                this.runningRequests[requestIdentifier] = this.api(config as any)
                return new Promise((onResolve, onReject) => {
                    this.runningRequests[requestIdentifier]
                        .then((response) => {
                            this.handleFinishedRequest(requestIdentifier)
                            onResolve(response)
                        })
                        .catch((error) => {
                            this.handleFinishedRequest(requestIdentifier)
                            onReject(error)
                        })
                })
            }
        }
        switch (method) {
            case REQUEST_METHOD.GET:
            case REQUEST_METHOD.DELETE:
            case REQUEST_METHOD.OPTIONS:
                return manageRequest(`${method}:${url}`)
            case REQUEST_METHOD.PUT:
            case REQUEST_METHOD.POST:
            case REQUEST_METHOD.PATCH:
                // NOTE: Serializing `data` is highly inefficient.
                // TODO: Find a better way to hash `data`.
                // return manageRequest(`${method}:${url}:${md5(JSON.stringify(data))}`)
                return manageRequest(`${method}:${url}:${data}`)
            default:
                return this.api(config as any)
        }
    }

    /**
     * Dispatches a request to the given URL with the given method using the
     * provided data as the payload.
     *
     * @param url The URL to which the request will be sent.
     * @param method The method that is used to send the request.
     * @param data The payload of the request.
     * @param propOptions Additional configurations for the request.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    request = (
        url: string,
        method = 'get' as MethodType,
        data: RequestPayloadType,
        propOptions = {} as IRequestOptions
    ): Promise<any> => {
        const encodedURL = ServerCommunicator.encodeURLParameterValues(url)

        const scConfig = this.config || {}
        const { useFormData = true, ...options } = propOptions
        const baseConfiguration = scConfig.baseRequestConfigCallback
            ? scConfig.baseRequestConfigCallback()
            : DEFAULT_CONFIGURATION
        const config = Object.assign(
            {},
            baseConfiguration,
            {
                method: method,
                url: encodedURL,
            },
            options
        )
        if (options.headers) {
            config.headers = Object.assign(baseConfiguration.headers || {}, config.headers || {}, options.headers)
        }

        if (data && Object.keys(data).length > 0) {
            if (typeof useFormData === 'undefined' || useFormData) {
                const formData = new FormData()
                Object.keys(data).forEach((key) => {
                    const value = (data as any)[key]
                    if (typeof value === 'undefined') {
                        return
                    }
                    if (value === null) {
                        formData.append(key, 'null')
                        return
                    }
                    if (value instanceof Blob || isFileObject(value)) {
                        formData.append(key, value)
                    } else {
                        switch (typeof value) {
                            case 'bigint':
                            case 'number':
                            case 'boolean':
                                formData.append(key, String(value))
                                break
                            case 'string':
                                formData.append(key, value)
                                break
                            case 'object':
                                if (Array.isArray(value)) {
                                    formData.append(key, value.join(','))
                                } else {
                                    formData.append(key, JSON.stringify(value))
                                }
                        }
                    }
                })
                config.data = formData
            } else {
                config.data = data
            }
        }

        if (scConfig.beforeRequestCallback) {
            // E.g. reset the request timeout.
            return scConfig.beforeRequestCallback(config).then(() => this.queueAndSendRequest(config))
        }

        return this.queueAndSendRequest(config)
    }

    api(config: any): FetchPromise {
        const headers: any = {}
        let body: any = config.data
        const method: any = config.method
        const signal: AbortSignal = config.signal

        if (!isNil(config.headers)) {
            for (const key in config.headers) {
                if (Object.prototype.hasOwnProperty.call(config.headers, key)) {
                    headers[key] = config.headers[key]
                }
            }
        }

        return new Promise(async (resolve, reject) => {
            let resp
            try {
                resp = await fetch(config.url, {
                    method: method,
                    body: body,
                    headers: headers,
                    signal,
                })
                let data

                // if (method.toLowerCase() != 'delete')
                // {
                data = await resp.json()
                // }

                const response = {
                    data,
                    config,
                    status: resp.status,
                    statusText: resp.statusText,
                    headers: resp.headers,
                } as FetchResponse

                if (resp?.status == 401) {
                    // ServerCommunicator.dispatch(setSessionTimeOutModal(true))
                }

                if (!(resp.status >= 200 && resp.status <= 299)) {
                    reject({ config, response } as FetchError)
                }
                resolve(response)
            } catch (err: any) {
                // console.log('[fetch][err]')
                // console.log(err)
                // console.log(err.message)

                if (resp?.status == 401) {
                    // ServerCommunicator.dispatch(setSessionTimeOutModal(true))
                }
                
                if (resp?.status == 403) {
                    // await ServerCommunicator.dispatch(getProfile())
                    // ServerCommunicator.dispatch(setActivityAlert(true))
                }

                reject({
                    config,
                    response: {
                        config,
                        status: resp?.status,
                        statusText: resp?.statusText,
                        headers: resp?.headers,
                    },
                    message: err?.message || 'Something went wrong',
                } as FetchError)
            }
        })
    }

    /**
     * A convenience method for sending requests that use the GET method.
     *
     * @param url The URL the request is sent to.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    get = (url: string, options = {} as IRequestOptions): FetchPromise => this.request(url, 'get', null, options)
    /**
     * A convenience method for sending requests that use the POST method.
     *
     * @param url The URL the request is sent to.
     * @param data The payload of the request.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    post = (url: string, data: RequestPayloadType, options = {} as IRequestOptions): FetchPromise =>
        this.request(url, 'post', data, options)
    /**
     * A convenience method for sending requests that use the PUT method.
     *
     * @param url The URL the request is sent to.
     * @param data The payload of the request.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    put = (url: string, data: RequestPayloadType, options = {} as IRequestOptions): FetchPromise =>
        this.request(url, 'put', data, options)
    /**
     * A convenience method for sending requests that use the PATCH method.
     *
     * @param url The URL the request is sent to.
     * @param data The payload of the request.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    patch = (url: string, data: RequestPayloadType, options = {} as IRequestOptions): FetchPromise =>
        this.request(url, 'patch', data, options)
    /**
     * A convenience method for sending requests that use the DELETE method.
     *
     * @param url The URL the request is sent to.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    delete = (url: string, options = {} as IRequestOptions): FetchPromise => this.request(url, 'delete', null, options)
    /**
     * A convenience method for sending requests that use the OPTIONS method.
     *
     * @param url The URL the request is sent to.
     * @param options Additional request configurations.
     * @returns A promise that will resolve in the servers response or reject
     * if the request failed to reach the server.
     */
    options = (url: string, options = {} as IRequestOptions): FetchPromise =>
        this.request(url, 'options', null, options)

    /**
     * Checks whether the given server response is the result of cancelling
     * the request.
     *
     * @param response The response that a request promise resolved/rejected
     * to.
     * @returns `true` if the response is the result of a request
     * cancellation, `false` otherwise.
     */
    isCancel = (response: unknown): boolean => false
}

/**
 * A function that sets the auth and fcm token on the header
 * for all the future request via ServerCommunicator
 * @param token access token received after login
 * @param fcmToken FCM Token
 */
export const resetScConfig = (token: string | null, fcmToken: string | null) => {
    const config = {} as IAPIHeader
    if (token != null) config['Authorization'] = `Bearer ${token}`
    if (fcmToken != null) config['X-DEVICE-TOKEN'] = fcmToken

    ServerCommunicator.applyConfigs({
        baseRequestConfigCallback: () => {
            return {
                headers: { ...config, Accept: 'application/json' },
            }
        },
    })
}
