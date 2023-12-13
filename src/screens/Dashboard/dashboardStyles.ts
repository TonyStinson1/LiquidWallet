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
    card: {
        padding: 20,
        // backgroundColor: '#222A3D',
        height: 200,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 15,
        borderColor: '#EDEEFF',
        borderLeftWidth: 1,
        borderRightWidth: 0.3,
        borderTopWidth: 1,
        borderBottomWidth: 0.3,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    credential: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 65,
    },
    date: {
        color: 'white',
    },
    verifiedIcon: {
        width: 10,
        height: 10,
        // tintColor: 'green',
    },
    carImage: {
        width: 50,
        height: 50,
    },
    image1Style: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    emptyListContainer: {
        padding: 20,
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    emptyListText: {
        color: '#fff', // Change the color as needed
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 22
    },
    centerEmptySet: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    cardDetail: {
        backgroundColor: '#282638D9',
        height: 370,
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 20
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
    backIcon: {
        backgroundColor: '#4c5467',
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '70%',
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
        width: 30,
        height: 30,
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
        flexDirection: 'row',
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
    labelText: {
        color: '#EDEEFF',
        fontWeight: '500',
        fontSize: 15,
    },
    label: {
        marginBottom: 5,
    },
    addPatientIconContainer: {
        position: 'absolute',
        top: 15,
        zIndex: 999,
        width: '100%'
    },
    iconStyle: { paddingLeft: 7 },
    textBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        paddingLeft: 40,
        width: '100%',
        height: 50,
        marginBottom: 16,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },
})
