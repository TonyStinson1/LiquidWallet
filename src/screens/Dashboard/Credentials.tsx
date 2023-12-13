import React, { useCallback, useState, useRef, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, FlatList, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import { dashStyles } from './dashboardStyles'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Ionicons'

import Icon4 from 'react-native-vector-icons/Octicons'

import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../store/AppHooks'
import { setAccessToken, setUserId } from '../../store/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-modal-datetime-picker'

const filerPoints = [
    { header: 'Credential Type', below: 'Any Type', type: 'cred' },
    { header: 'Issuer DID', below: 'All Issuer DID', type: 'issue' },
    { header: 'Holder DID', below: 'All Holder DID', type: 'hold' },
    { header: 'Issuance Date', below: 'Anytime', type: 'issuance' },
    { header: 'Expiration Date', below: 'Anytime', type: 'expire' },
    { header: 'Hide Expired', below: '', type: 'hide' },
]

const credTypes = [
    { header: 'Driver license', check: false },
    { header: 'Passport', check: false },
    { header: 'ID Card', check: false },
    { header: 'Residence Permit', check: false },
]

const issueTypes = [
    { header: 'All Issuer DID', check: false },
    { header: 'Liquid', check: false },
    { header: 'HKGOV', check: false },
]

const holderTypes = [
    { header: 'All Holder DID', check: false },
    { header: 'Default DID', check: false },
    { header: 'Account 2', check: false },
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
    const [credPoints, setCredPoints] = useState([])
    const [issuePoints, setIssuePoints] = useState([])
    const [holderPoints, setHolderPoints] = useState([])
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [change, setChange] = useState('')
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [date, setDate] = useState(new Date())

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
            <TouchableOpacity onPress={() => setModalType(item.type)} style={{ margin: 20, marginLeft: 0 }}>
                <Text style={{ color: '#fff', fontSize: 14 }}>{item.header}</Text>
                <Text style={{ color: '#898989', fontSize: 10 }}>{item.below}</Text>
            </TouchableOpacity>
        )
    }

    const formattedDate = from
        ? from.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
          })
        : ''

    const formattedDate1 = to
        ? to.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
          })
        : ''

    useEffect(() => {
        if (accessToken && accessToken.length > 0) {
            // tokenCall()
        }
        setCredPoints(credTypes)
        setIssuePoints(issueTypes)
        setHolderPoints(holderTypes)
    }, [])

    const toggleCheck = (index: number) => {
        const updatedCredPoints = [...credPoints]
        updatedCredPoints[index].check = !updatedCredPoints[index].check
        setCredPoints(updatedCredPoints)
    }

    const toggleCheck1 = (index: number) => {
        const updatedCredPoints = [...issuePoints]
        updatedCredPoints[index].check = !updatedCredPoints[index].check
        setIssuePoints(updatedCredPoints)
    }

    const toggleCheck2 = (index: number) => {
        const updatedCredPoints = [...holderPoints]
        updatedCredPoints[index].check = !updatedCredPoints[index].check
        setHolderPoints(updatedCredPoints)
    }

    const resetFilters = () => {
        if (modalType == 'cred') {
            const resetCredPoints = credPoints.map((item) => ({ ...item, check: false }))
            setCredPoints(resetCredPoints)
        } else if (modalType == 'issue') {
            const resetCredPoints = issuePoints.map((item) => ({ ...item, check: false }))
            setIssuePoints(resetCredPoints)
        } else if (modalType == 'hold') {
            const resetCredPoints = holderPoints.map((item) => ({ ...item, check: false }))
            setHolderPoints(resetCredPoints)
        }
    }

    const resetDate = () => {
        setFrom('')
        setTo('')
    }

    const addItems = (item: any, index: number) => {
        return (
            <TouchableOpacity
                style={dashStyles.editItemContainer}
                onPress={() => {
                    if (modalType == 'cred') {
                        toggleCheck(index)
                    } else if (modalType == 'issue') {
                        toggleCheck1(index)
                    } else if (modalType == 'hold') {
                        toggleCheck2(index)
                    }
                }}
            >
                <Text style={dashStyles.editText}>{item.header}</Text>
                <View style={{ position: 'absolute', right: 0 }}>
                    {item.check ? (
                        <Icon4 name='square-fill' size={20} color='#00EC6D' />
                    ) : (
                        <Icon4 name='square' size={20} color='#fff' />
                    )}
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
                            onPress={() => handleClosePress()}
                            style={dashStyles.btn}
                        >
                            <Text style={dashStyles.btnText}>Show Result</Text>
                        </Pressable>
                    </View>
                </View>
            )
        } else if (modalType == 'cred') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <TouchableOpacity onPress={() => setModalType('edit')} style={dashStyles.modalDashboard1}>
                            <Icon3 style={{ top: 6 }} name={'chevron-back-outline'} color={'#fff'} size={20} />
                            <Text style={{ color: '#fff', fontSize: 20, top: 2 }}>Credential Type</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetFilters()} style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 13, top: 7 }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View>{credPoints.map((item, index) => addItems(item, index))}</View>
                </View>
            )
        } else if (modalType == 'issue') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <TouchableOpacity onPress={() => setModalType('edit')} style={dashStyles.modalDashboard1}>
                            <Icon3 style={{ top: 7 }} name={'chevron-back-outline'} color={'#fff'} size={20} />
                            <Text style={{ color: '#fff', fontSize: 20, top: 2 }}>Issuer DID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetFilters()} style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 13, top: 7 }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View>{issuePoints.map((item, index) => addItems(item, index))}</View>
                </View>
            )
        } else if (modalType == 'hold') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <TouchableOpacity onPress={() => setModalType('edit')} style={dashStyles.modalDashboard1}>
                            <Icon3 style={{ top: 7 }} name={'chevron-back-outline'} color={'#fff'} size={20} />
                            <Text style={{ color: '#fff', fontSize: 20, top: 2 }}>Holder DID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetFilters()} style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 13, top: 7 }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View>{holderPoints.map((item, index) => addItems(item, index))}</View>
                </View>
            )
        } else if (modalType == 'issuance') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <TouchableOpacity onPress={() => setModalType('edit')} style={dashStyles.modalDashboard1}>
                            <Icon3 style={{ top: 7 }} name={'chevron-back-outline'} color={'#fff'} size={20} />
                            <Text style={{ color: '#fff', fontSize: 20, top: 2 }}>Issuance Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetDate()} style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 13, top: 7 }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={[dashStyles.label, { flexDirection: 'row', marginTop: 10 }]}>
                            <Text style={dashStyles.labelText}>From</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#fff', height: 50, }} onPress={() => {
                            setIsCalendarVisible(!isCalendarVisible)
                            setChange('from')
                        }}>
                            <View style={{ ...dashStyles.addPatientIconContainer, zIndex: 999 }}>
                                <Icon1 style={dashStyles.iconStyle} name='calendar' color={'#747E9B'} size={17} />
                            </View>
                            <View style={dashStyles.textBox}>
                                <Text style={{ color: '#43494F' }}>
                                    {from.length == 0 ? 'Enter date' : formattedDate}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={[dashStyles.label, { flexDirection: 'row', marginTop: 10 }]}>
                            <Text style={dashStyles.labelText}>To</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#fff', height: 50, }} onPress={() => {
                            setIsCalendarVisible(!isCalendarVisible)
                            setChange('to')
                        }}>
                            <View style={{ ...dashStyles.addPatientIconContainer, zIndex: 999 }}>
                                <Icon1 style={dashStyles.iconStyle} name='calendar' color={'#747E9B'} size={17} />
                            </View>
                            <View style={dashStyles.textBox}>
                                <Text style={{ color: '#43494F' }}>
                                    {to.length == 0 ? 'Enter date' : formattedDate1}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (modalType == 'expire') {
            return (
                <View style={dashStyles.contentContainer}>
                    <View style={dashStyles.modalDashboard}>
                        <TouchableOpacity onPress={() => setModalType('edit')} style={dashStyles.modalDashboard1}>
                            <Icon3 style={{ top: 7 }} name={'chevron-back-outline'} color={'#fff'} size={20} />
                            <Text style={{ color: '#fff', fontSize: 20, top: 2 }}>Expiration Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetDate()} style={dashStyles.modalDashboard1}>
                            <Text style={{ color: '#fff', fontSize: 13, top: 7 }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={[dashStyles.label, { flexDirection: 'row', marginTop: 10 }]}>
                            <Text style={dashStyles.labelText}>From</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#fff', height: 50, }} onPress={() => {
                            setIsCalendarVisible(!isCalendarVisible)
                            setChange('from')
                        }}>
                            <View style={{ ...dashStyles.addPatientIconContainer, zIndex: 999 }}>
                                <Icon1 style={dashStyles.iconStyle} name='calendar' color={'#747E9B'} size={17} />
                            </View>
                            <View style={dashStyles.textBox}>
                                <Text style={{ color: '#43494F' }}>
                                    {from.length == 0 ? 'Enter date' : formattedDate}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={[dashStyles.label, { flexDirection: 'row', marginTop: 10 }]}>
                            <Text style={dashStyles.labelText}>To</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#fff', height: 50, }} onPress={() => {
                            setIsCalendarVisible(!isCalendarVisible)
                            setChange('to')
                        }}>
                            <View style={{ ...dashStyles.addPatientIconContainer, zIndex: 999 }}>
                                <Icon1 style={dashStyles.iconStyle} name='calendar' color={'#747E9B'} size={17} />
                            </View>
                            <View style={dashStyles.textBox}>
                                <Text style={{ color: '#43494F' }}>
                                    {to.length == 0 ? 'Enter date' : formattedDate1}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
                    <Text style={dashStyles.headerText}>Credentials: {cardLine.length}</Text>
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
            <FlatList
                data={cardLine}
                style={{ marginTop: 10, marginBottom: 20 }}
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
            <DatePicker
                    minimumDate={new Date(1923, 0, 1)}
                    isVisible={isCalendarVisible}
                    date={date}
                    maximumDate={new Date()}
                    mode={'date'}
                    onConfirm={(date) => {
                        setIsCalendarVisible(false)
                        setDate(date)
                        if(change == 'from') {
                            setFrom(date)
                        } else {
                            setTo(date)
                        }
                    }}
                    onCancel={() => {
                        setIsCalendarVisible(false)
                    }}
                />
        </ScrollView>
    )
}

export default Credentials
