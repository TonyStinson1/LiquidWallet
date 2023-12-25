import React, { useCallback, useRef, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Entypo'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import { dashStyles } from './dashboardStyles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { useNavigation } from '@react-navigation/native'
import DeleteModal from '../../components/DeleteModal'

const filerPoints = [
    { header: 'Edit DID', name: 'edit' },
    { header: 'Export DID', name: 'share' },
    { header: 'Delete DID', name: 'delete' },
]

const addPoints = [
    { header: 'Create New DID', name: 'edit' },
    { header: 'Import existing DID', name: 'share' },
    // { header: 'Delete DID', name: 'delete' },
]

const accData = [{ name: 'Account 2' }, { name: 'Default DID' }, { name: 'Account 3' }]

const DIDsScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handleClosePress = () => bottomSheetModalRef?.current.close()

    const [modalType, setModalType] = useState('')
    const [infoModal, setInfoModal] = useState(false)

    // variables
    const snapPoints = [1, '40%']
    const editSnapPoints = [1, '50%']

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        // bottomSheetModalRef.current?.present()
    }, [])

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    const filterItems = (item: any) => {
        return (
            <TouchableOpacity
                style={dashStyles.editItemContainer}
                onPress={() => {
                    handleClosePress()
                    if (item.name == 'edit') {
                        navigation.navigate('DIDEdit')
                    } else if (item.name == 'share') {
                        navigation.navigate('ExportDID')
                    } else if (item.name == 'delete') {
                        navigation.navigate('DeleteVerify')
                    }
                }}
            >
                <View style={dashStyles.editItem}>
                    {item.name == 'delete' ? (
                        <Icon2 name={item.name} size={18} color='white' />
                    ) : (
                        <Icon1 name={item.name} size={18} color='white' />
                    )}
                </View>
                <Text style={dashStyles.editText}>{item.header}</Text>
                <View style={{ position: 'absolute', right: 0 }}>
                    <Icon3 name={'chevron-small-right'} size={18} color='white' />
                </View>
            </TouchableOpacity>
        )
    }

    // callbacks
    const editPresentModalPress = useCallback(() => {
        setModalType('edit')
        bottomSheetModalRef.current?.present()
    }, [])

    // callbacks
    const addPresentModalPress = useCallback(() => {
        setModalType('add')
        bottomSheetModalRef.current?.present()
    }, [])

    const accItem = (acc: string) => {
        return (
            <View style={{ alignItems: 'center', width: 80, marginRight: 15 }}>
                <Image source={require('../../../assets/images/male.png')} style={styles.accPic} />
                <View style={{ width: 80, }}>
                    <Text style={styles.accText}>{acc.name}</Text>
                </View>
            </View>
        )
    }

    const addItems = (item: any) => {
        return (
            <TouchableOpacity
                style={dashStyles.editItemContainer}
                onPress={() => {
                    handleClosePress()
                    if (item.name == 'edit') {
                        navigation.navigate('CreateDID')
                    } else if (item.name == 'share') {
                        navigation.navigate('ExportDID')
                    }
                }}
            >
                <View style={dashStyles.editItem}>
                    {item.name == 'delete' ? (
                        <Icon2 name={item.name} size={18} color='white' />
                    ) : (
                        <Icon1 name={item.name} size={18} color='white' />
                    )}
                </View>
                <Text style={dashStyles.editText}>{item.header}</Text>
                <View style={{ position: 'absolute', right: 0 }}>
                    <Icon3 name={'chevron-small-right'} size={18} color='white' />
                </View>
            </TouchableOpacity>
        )
    }

    const closeDown = () => {
        setInfoModal(false)
    }

    const renderModal = () => {
        if (modalType == 'edit') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View style={{ justifyContent: 'center', marginBottom: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Edit DID</Text>
                        </View>
                    </View>
                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            {accData.map((acc: string) => accItem(acc))}
                        </View>
                    </ScrollView>
                    <View>{filerPoints.map((item) => filterItems(item))}</View>
                </View>
            )
        } else if (modalType == 'add') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View style={{ justifyContent: 'center', marginBottom: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Add DID</Text>
                        </View>
                    </View>
                    <View>{addPoints.map((item) => addItems(item))}</View>
                </View>
            )
        }
    }

    return (
        <ScrollView style={{ backgroundColor: '#10193A', flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                }}
            >
                <View style={{}}>
                    <Text style={{ color: 'white', fontSize: 20 }}>DIDs</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: 70,
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity onPress={() => addPresentModalPress()} style={styles.iconContainer}>
                        <Icon name='add-circle-outline' size={20} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => editPresentModalPress()} style={styles.iconContainer}>
                        <Icon2 name='setting' size={17} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity style={{ position: 'absolute', zIndex: 999, right: 50 }}>
                    <Image source={require('../../../assets/images/sQR.png')} style={styles.sQR} />
                </TouchableOpacity>
                <Image source={require('../../../assets/images/strip.png')} style={styles.cardImage} />
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={modalType == 'edit' ? editSnapPoints : snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={CustomBackdrop}
                handleStyle={dashStyles.handlingStyle}
                handleIndicatorStyle={dashStyles.handleIndicator}
            >
                {renderModal()}
            </BottomSheetModal>
            <DeleteModal
                text={
                    "This can't be undone. Verifiable credentials received through this DID will not be deleted, you can delete it manually"
                }
                visible={infoModal}
                closeIt={closeDown}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '90%',
        padding: 15,
        backgroundColor: '#1E2A59', // Adjust the background color as needed
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    accText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    defaultDID: {
        fontSize: 17,
        color: 'white',
        fontWeight: '400',
    },
    ellipsis: {
        fontSize: 24,
        color: 'white',
    },
    didKey: {
        fontSize: 12,
        marginTop: 10,
        color: '#fff',
        fontWeight: '300',
    },
    createdDate: {
        fontSize: 12,
        marginTop: 5,
        color: '#fff',
        fontWeight: '300',
    },
    iconContainer: {
        width: 28,
        backgroundColor: '#4c5467',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 20,
        marginRight: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#000',
        fontSize: 15,
    },
    cardImage: {
        width: '90%',
        height: 450,
        resizeMode: 'contain',
    },
    sQR: {
        width: 90,
        height: 60,
        resizeMode: 'contain',
    },
    accPic: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
})

export default DIDsScreen
