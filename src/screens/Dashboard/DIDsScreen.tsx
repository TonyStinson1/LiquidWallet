import React, { useCallback, useRef, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
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
    { header: 'Delete DID', name: 'delete' },
]

const DIDsScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handleClosePress = () => bottomSheetModalRef?.current.close()

    const [modalType, setModalType] = useState('')
    const [infoModal, setInfoModal] = useState(false)

    // variables
    const snapPoints = [1, '40%']

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
                    } else if (item.name == 'delete') {
                        setInfoModal(true)
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

    const RenderItem = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.defaultDID}>Default DID</Text>
                    <Pressable onPress={() => editPresentModalPress()}>
                        <Icon name='ellipsis-vertical' size={20} color='white' />
                    </Pressable>
                </View>
                <Text style={styles.didKey}>did:key:z6jsUydBDjshdbjsd... {/* Replace with your actual DID key */}</Text>
                <Text style={styles.createdDate}>Created: 30-06-2023 23:53:00</Text>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    {/* <Pressable
                        // onPress={() => navigation.navigate('SetupPasscode')}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Share</Text>
                    </Pressable>
                    <Pressable
                        // onPress={() => navigation.navigate('SetupPasscode')}
                        onPress={handlePresentModalPress}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Edit</Text>
                    </Pressable> */}
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
                    //   justifyContent: 'space-between',
                    padding: 20,
                }}
            >
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>DIDs</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <TouchableOpacity onPress={() => addPresentModalPress()} style={{ width: '10%' }}>
                        <Icon name='add-circle-outline' size={24} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '10%' }}>
                        <Icon name='notifications-outline' size={24} color='white' />
                    </View>
                </View>
            </View>
            <View>{RenderItem()}</View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
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
})

export default DIDsScreen
