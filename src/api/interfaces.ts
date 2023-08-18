import { Meta, Links } from "../store/actions/interface"

export enum REQUEST_METHOD {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete',
    OPTIONS = 'options',
}

export interface FetchResponse<T = any> {
    data: {
        code: number,
        data: T,
        msg: string,
        links?: Links
        meta?: Meta
        success?: boolean
        services?: any
        national?: any
        tags?: any
    },
    status: number
    statusText: string
    headers: any
    config: IServerCommunicatorConfig
    request?: any
}

export interface FetchError<T = any> extends Error {
    config: IServerCommunicatorConfig
    code?: string
    request?: any
    response?: FetchResponse<T>
    isFetchError: boolean
    toJSON: () => object
}

export interface FetchPromise<T = any> extends Promise<FetchResponse<T>> { }

export interface IServerCommunicatorConfig {
    /**
     * The default timeout time for each request.
     * This may be overwritten by the options argument of an individual
     * request.
     */
    defaultTimeout?: number
    /**
     * The default content type.
     * This may be an object or a string.
     * If `contentType` is a `string`, then the `Content-Type` and the
     * accept header for all request types will be set to
     * `contentType`.
     * If `contentType` is an object, then it is expected to specify a
     * string representing the content type for each of the following
     * properties: `{ get, post, put, patch }`
     */
    contentType?:
    | string
    | {
        get: string
        post: string
        put: string
        patch: string
    }
    /**
     * If set, `baseRequestConfigCallback` will be called to get the
     * base configuration of any request.
     * The output of `baseRequestConfigCallback` will be merged with
     * the individual options of each request. The request options
     * have precedence over the base configuration.
     */
    baseRequestConfigCallback?: () => IServerCommunicatorConfig
    /**
     * If set, `beforeRequestCallback` will be called with the request
     * configurations before any request will be sent.
     */
    beforeRequestCallback?: (config: IServerCommunicatorConfig) => Promise<void>
    /** Additional header for the request. */
    headers?: { [key: string]: unknown }

    /** An Fetch AbortController signal for cancelling the request. */
    signal?: AbortSignal | null

    /** AbortController Instance for aborting the async requests */
    controller?: AbortController | null

    data?: any
}

export interface IRequestOptions extends Partial<IServerCommunicatorConfig> {
    /**
     * Signifies whether the server communicator should use the FormData class
     * to prepare the payload.
     */
    useFormData?: boolean
}

export interface Cancel {
    message: string | undefined
}
export interface CancelToken {
    promise: Promise<Cancel>
    reason?: Cancel
    throwIfRequested(): void
}

export interface Canceler {
    (message?: string): void
}

export interface CancelTokenSource {
    token: CancelToken
    cancel: Canceler
}

export interface CancelTokenStatic {
    new(executor: (cancel: Canceler) => void): CancelToken
    source(): CancelTokenSource
}
