

export type PreAuthNavigationParamList = {
    PreAuth: undefined
}

export type PostAuthNavigationParamList = {
    DIDEdit: undefined
    ExportDID: undefined
    Credential: undefined
    DIDVerify: undefined
    BioID: undefined
    ScanHKID: undefined
}

export type AuthNavigationParamList = {
    Register: undefined
    ImportDID: undefined
    CreateDID: undefined
    DIDRecovery: undefined
    SetupPasscode: undefined
    PinScreen: undefined
    RePinScreen: IRePinScreen
    Biometric: undefined
    ImportWallet: undefined
    Password: undefined
}

export type IRePinScreen = {
    pin: string
}