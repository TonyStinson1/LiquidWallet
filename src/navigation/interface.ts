

export type PreAuthNavigationParamList = {
    PreAuth: undefined
}

export type AuthNavigationParamList = {
    Register: undefined
    SetupPasscode: undefined
    PinScreen: undefined
    RePinScreen: IRePinScreen
    Biometric: undefined
}

export type IRePinScreen = {
    pin: string
}