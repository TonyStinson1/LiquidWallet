import React, { useCallback, useRef } from 'react'
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

const filerPoints = [
    { header: 'Edit DID', name: 'edit' },
    { header: 'Export DID', name: 'share' },
    { header: 'Delete DID', name: 'delete' },
]

const DIDsScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handleClosePress = () => bottomSheetModalRef?.current.close()

    // variables
    const snapPoints = [1, '40%']

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
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
                  item.name == 'edit' && navigation.navigate('DIDEdit')
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

    const RenderItem = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.defaultDID}>Default DID</Text>
                    <Icon name='ellipsis-vertical' size={20} color='white' />
                </View>
                <Text style={styles.didKey}>did:key:z6jsUydBDjshdbjsd... {/* Replace with your actual DID key */}</Text>
                <Text style={styles.createdDate}>Created: 30-06-2023 23:53:00</Text>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Pressable
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
                    </Pressable>
                </View>
            </View>
        )
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
                    <View style={{ width: '10%' }}>
                        <Icon name='add-circle-outline' size={24} color='white' />
                    </View>
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
            </BottomSheetModal>
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
