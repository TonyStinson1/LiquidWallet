import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { toastErrorComponent, toastSuccessComponent } from '../../../utils/utils'
import { FetchError, FetchResponse } from '../../api/interfaces'
import ServerCommunicator, { resetScConfig } from '../../api/ServerCommunicator'
// import {
//     ACCEPT_INVITATION,
//     EMAIL_LOGIN,
//     FORGET_PASSWORD,
//     INVITAION_DETAILS,
//     INVITAION_MOB_DETAILS,
//     OTP_VERIFICATION,
//     OTP_VERIFICATION_LOGIN,
//     REGISTER,
//     RESEND_OTP,
// } from '../../constant/urls'
// import {
//     IForgotPasswordParam,
//     IInvitationDetailsResp,
//     ILoginWithEmailParam,
//     ILoginWithEmailResp,
//     ILoginWithMobileParam,
//     IMobDetailsResp,
//     IOtpVerificationParam,
//     IRegisterParam,
//     IRegisterResp,
// } from '../actions/interface'
import { AppDispatch } from '../store'
import { toastErrorComponent, toastSuccessComponent } from '../../components/toastConfig'

const SvrComm = new ServerCommunicator()

export interface AuthState {
    accessToken: string
    userId: string
    fcmToken: string
    error: string
    isRegistered: boolean
}

const initialState: AuthState = {
    accessToken: '',
    userId: '',
    fcmToken: '',
    error: '',
    isRegistered: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
            state.accessToken = action.payload.accessToken
        },
        setUserId: (state, action: PayloadAction<{ userId: string }>) => {
            state.userId = action.payload.userId
        },
        setIsRegistered: (state, action: PayloadAction<{ isRegistered: boolean }>) => {
            state.isRegistered = action.payload.isRegistered
        },
        logout: (state) => {
            state.accessToken = ''
            state.error = '',
            state.isRegistered = false,
            AsyncStorage.removeItem('accessToken')
        },
    },
})

export const {
    setAccessToken,
    setUserId,
    logout,
    setIsRegistered
} = authSlice.actions

export default authSlice.reducer

// export const loginUser = (payload: ILoginWithEmailParam) => {
//     return async (dispatch: AppDispatch) => {
//         dispatch(setError(''))
//         return SvrComm.post(EMAIL_LOGIN, payload as any)
//             .then(async (response: FetchResponse<ILoginWithEmailResp>) => {
//                 const { data } = response

//                 await AsyncStorage.setItem('accessToken', data.data.token)
//                 dispatch(setAccessToken({ accessToken: data.data.token }))
//                 dispatch(setUser({ user: data.data.user }))
//                 return data
//             })
//             .catch((err: FetchError<any>) => {
//                 if (err.response?.data?.code == 108) {
//                     let obj = {
//                         numberVerify: true,
//                         mobile: err.response.data.data.tel_number,
//                     }
//                     return obj
//                 } else {
//                     if (err.response?.data.code !== 106) {
//                         // dispatch(clearInviteCode())
//                     }
//                     toastErrorComponent(err.response?.data.msg)
//                     return null
//                 }
//             })
//     }
// }

