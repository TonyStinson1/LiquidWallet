import { StyleSheet, Dimensions } from 'react-native'

export const dashStyles = StyleSheet.create({
    handlingStyle: {
        backgroundColor: '#10193A',
    },
    contentContainer: {
        backgroundColor: '#10193A',
        flex: 1,
        padding: 25,
    },
    handleIndicator: {
        backgroundColor: '#fff',
    },
    btn: {
        width: 230,
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#1E2A59',
        marginBottom: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
    },
    editItem: {
        marginRight: 10,
    },
    editItemContainer: { margin: 15, marginLeft: 0, flexDirection: 'row', alignItems: 'center' },
    editText: { color: '#fff', fontSize: 12, fontWeight: '400' },
    modalDashboard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    container: {
        backgroundColor: '#10193A',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        padding: 20,
    },
    headerLeft: {
        width: '80%',
    },
    headerRight: {
        flexDirection: 'row',
        width: '20%',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    headerIcon: {
        width: '10%',
    },
    contentContainer1: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    searchContainer: {
        width: '85%',
    },
    inputLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 20,
        flex: 0.85,
    },
    searchFilterIcon: {
        marginLeft: 20,
    },
    searchFilterImage: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    filterButtonText: {
        color: 'white',
        marginRight: 10,
    },
    profileIconContainer: {
        alignItems: 'center',
        margin: 60,
    },
    profileIcon: {
        width: 140,
        height: 140,
    },
    credentialInfo: {
        margin: 20,
    },
    credentialInfoText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
    },
    bottomContainer: {
        backgroundColor: '#1E2A59',
        width: '80%',
        height: 90,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
    },
    bottomContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    bottomText: {
        color: 'white',
        fontSize: 14,
    },
    bottomTextSecondary: {
        color: 'white',
        fontSize: 11,
        marginLeft: 10,
    },
    expiresContainer: {
        position: 'absolute',
        padding: 3,
        right: 10,
        top: 10,
        width: 130,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    expiresText: {
        color: '#000',
        fontSize: 8,
    },
    modalDashboard1: {
        justifyContent: 'center',
        marginBottom: 10,
    },
    modalHeader: {
        justifyContent: 'center',
        marginBottom: 10,
    },
    modalHeaderText: {
        color: '#fff',
        fontSize: 20,
    },
    modalReset: {
        justifyContent: 'center',
        marginBottom: 10,
    },
    modalResetText: {
        color: '#fff',
        fontSize: 16,
    },
})
