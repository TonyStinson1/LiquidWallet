import React, { useCallback, useState, useRef, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, FlatList, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import { dashStyles } from './dashboardStyles'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Entypo'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../store/AppHooks'
import { setAccessToken, setUserId } from '../../store/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'

const filerPoints = [
    { header: 'Credential Type', below: 'Any Type' },
    { header: 'Issuer DID', below: 'All Issuer DID' },
    { header: 'Holder DID', below: 'All Holder DID' },
    { header: 'Issuance Date', below: 'Anytime' },
    { header: 'Expiration Date', below: 'Anytime' },
    { header: 'Hide Expired', below: '' },
]

const cardLine = [
    // Add your credential data here
    { title: 'Driver License', credential: 'Basic Credential', date: 'January 01, 2023', verified: true },
    { title: 'Alumni Card', credential: 'Basic Credential', date: 'January 01, 2023', verified: true },
    { title: 'Driver License', credential: 'Basic Credential', date: 'January 01, 2023', verified: true },
    { title: 'Alumni Card', credential: 'Basic Credential', date: 'January 01, 2023', verified: true },
]

const Credentials = () => {
    const dispatch = useAppDispatch()
    const accessToken = useAppSelector((state) => state.auth.accessToken)
    const userId = useAppSelector((state) => state.auth.userId)

    const [modalType, setModalType] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handleClosePress = () => bottomSheetModalRef?.current.close()

    // variables
    const snapPoints1 = [1, '80%']
    const snapPoints2 = [1, '40%']

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        setModalType('edit')
        bottomSheetModalRef.current?.present()
    }, [])

    // callbacks
    const addPresentModalPress = useCallback(() => {
        console.log('Add credential')
    }, [])

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    const filterItems = (item: any) => {
        return (
            <TouchableOpacity style={{ margin: 20, marginLeft: 0 }}>
                <Text style={{ color: '#fff', fontSize: 14 }}>{item.header}</Text>
                <Text style={{ color: '#898989', fontSize: 10 }}>{item.below}</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        if (accessToken && accessToken.length > 0) {
            // tokenCall()
        }
    }, [])

    const addItems = (item: any) => {
        return (
            <TouchableOpacity
                style={dashStyles.editItemContainer}
                onPress={() => {
                    handleClosePress()
                    item.name == 'edit' && navigation.navigate('CreateDID')
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

    const renderModal = () => {
        if (modalType == 'edit') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <View style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Filters</Text>
                        </View>
                        <View style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Reset</Text>
                        </View>
                    </View>
                    <View>{filerPoints.map((item) => filterItems(item))}</View>
                    <View>
                        <Pressable
                            // onPress={() => navigation.navigate('SetupPasscode')}
                            style={dashStyles.btn}
                        >
                            <Text style={dashStyles.btnText}>Show Result</Text>
                        </Pressable>
                    </View>
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
                            <Text style={{ color: '#fff', fontSize: 20 }}>Edit DID</Text>
                        </View>
                    </View>
                    <View>{addPoints.map((item) => addItems(item))}</View>
                </View>
            )
        }
    }

    const CredentialCard: React.FC<{ item: any }> = ({ item }) => {
        return (
            <Pressable onPress={() => navigation.navigate('CardData', { item })}>
                <LinearGradient
                    style={dashStyles.card}
                    colors={['#282638D9', '#1C222F']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    useAngle={true}
                    angle={135}
                >
                    {/* <View style={dashStyles.card}> */}
                    <Text style={dashStyles.title}>{item.title}</Text>
                    <Text style={dashStyles.credential}>{item.credential}</Text>
                    <View style={dashStyles.bottomRow}>
                        <View>
                            <Text style={dashStyles.date}>{item.date}</Text>
                            {item.verified && (
                                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/verify.png')}
                                        style={dashStyles.verifiedIcon}
                                        resizeMode='contain'
                                    />
                                    <Text style={{ color: '#34CAA6', fontSize: 9, marginLeft: 5 }}>Valid</Text>
                                </View>
                            )}
                        </View>
                        <Image source={require('../../../assets/images/liquid.png')} style={dashStyles.carImage} />
                    </View>
                    {/* </View> */}
                </LinearGradient>
            </Pressable>
        )
    }

    const EmptyListMessage = () => (
        <View style={dashStyles.emptyListContainer}>
            <Text style={dashStyles.emptyListText}>
                To create your first credential, simply click above on the plus icon
            </Text>
        </View>
    )

    return (
        <ScrollView style={dashStyles.container}>
            <View style={dashStyles.header}>
                <View style={dashStyles.headerLeft}>
                    <Text style={dashStyles.headerText}>Credentials</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <TouchableOpacity
                        style={{ width: '10%' }}
                        onPress={() =>
                            // addPresentModalPress()
                            navigation.navigate('DIDVerify')
                        }
                    >
                        <Image
                            source={require('../../../assets/images/plus.png')}
                            style={dashStyles.searchFilterImage}
                        />
                        {/* <Icon name='add-circle-outline' size={24} color='white' /> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{ width: '10%' }}>
                        <View style={dashStyles.backIcon}>
                            <MIcon name='bell' size={17} color='white' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '10%' }} onPress={() => handlePresentModalPress()}>
                        <Image
                            source={require('../../../assets/images/filter.png')}
                            style={dashStyles.searchFilterImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={dashStyles.contentContainer1}>
                <TouchableOpacity onPress={handlePresentModalPress} style={dashStyles.filterButton}>
                    <Text style={dashStyles.filterButtonText}>Date issued (newest to oldest)</Text>
                    <Icon name='chevron-down' size={24} color='white' />
                </TouchableOpacity>
                <View style={dashStyles.credentialInfo}>
                    <Text style={dashStyles.credentialInfoText}>
                        You will see your credential here once you accept them
                    </Text>
                </View>
            </View> */}
            <FlatList
                data={cardLine}
                style={{ marginTop: 10, marginBottom: 20, }}
                renderItem={({ item }) => <CredentialCard item={item} />}
                ListEmptyComponent={<EmptyListMessage />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={cardLine.length === 0 && dashStyles.centerEmptySet}
            />
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={modalType == 'edit' ? snapPoints1 : snapPoints2}
                onChange={handleSheetChanges}
                backdropComponent={CustomBackdrop}
                handleStyle={dashStyles.handlingStyle}
                handleIndicatorStyle={dashStyles.handleIndicator}
            >
                {renderModal()}
            </BottomSheetModal>
        </ScrollView>
    )
}

export default Credentials
