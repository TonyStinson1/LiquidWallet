import React, { useCallback, useState, useRef, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import CustomBackdrop from '../../components/CustomBackdrop'
import { dashStyles } from './dashboardStyles'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Entypo'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../store/AppHooks'
import { setAccessToken, setUserId } from '../../store/slices/authSlice'

const filerPoints = [
    { header: 'Credential Type', below: 'Any Type' },
    { header: 'Issuer DID', below: 'All Issuer DID' },
    { header: 'Holder DID', below: 'All Holder DID' },
    { header: 'Issuance Date', below: 'Anytime' },
    { header: 'Expiration Date', below: 'Anytime' },
    { header: 'Hide Expired', below: '' },
]

const Credentials = () => {

    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(state => state.auth.accessToken);
    const userId = useAppSelector(state => state.auth.userId);

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
        setModalType('filter')
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

    const tokenCall = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userId": userId.length > 0 ? userId : "1214314"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://app.liquid.com.hk/api/sumsub/access_token", requestOptions)
            .then(response => response.text())
            .then(result => {
                let obj = JSON.parse(result)
                console.log("result", obj.data.token)
                dispatch(setAccessToken({ accessToken: obj.data.token }))
                dispatch(setUserId({ userId: obj.data.userId }))
            })
            .catch(error => console.log('error', error));// parses JSON response into native JavaScript objects
    }

    useEffect(() => {
        if (accessToken && accessToken.length > 0) {
            tokenCall()
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
                    <TouchableOpacity style={{ width: '10%' }} onPress={() =>
                        // addPresentModalPress()
                        navigation.navigate('DIDVerify')
                    }>
                        <Icon name='add-circle-outline' size={24} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '10%' }}>
                        <Icon name='notifications-outline' size={24} color='white' />
                    </View>
                </View>
            </View>
            <View style={dashStyles.contentContainer1}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        width: '100%',
                    }}
                >
                    <View style={dashStyles.searchContainer}>
                        <TextInput style={dashStyles.searchInput} placeholder='Search' />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Image
                            source={require('../../../assets/images/searchFilter.png')}
                            style={dashStyles.searchFilterImage}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={handlePresentModalPress} style={dashStyles.filterButton}>
                    <Text style={dashStyles.filterButtonText}>Date issued (newest to oldest)</Text>
                    <Icon name='chevron-down' size={24} color='white' />
                </TouchableOpacity>
                <View style={dashStyles.profileIconContainer}>
                    <Image source={require('../../../assets/images/profile.png')} style={dashStyles.profileIcon} />
                </View>
                <View style={dashStyles.credentialInfo}>
                    <Text style={dashStyles.credentialInfoText}>
                        You will see your credential here once you accept them
                    </Text>
                </View>
            </View>
            <View style={dashStyles.bottomContainer}>
                <View>
                    <Image source={require('../../../assets/images/passport.png')} style={dashStyles.bottomIcon} />
                </View>
                <View>
                    <Text style={dashStyles.bottomText}>Proof of citizenship (PoC)</Text>
                </View>
                <View>
                    <Text style={{ color: 'white', fontSize: 11 }}>Based on US-Passport</Text>
                </View>
                {/* Bottom Tab Navigator */}
                <View style={dashStyles.expiresContainer}>
                    <Text style={{ color: '#000', fontSize: 8 }}>Expires on: Aug, 31st 2024</Text>
                </View>
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={modalType == 'filter' ? snapPoints1 : snapPoints2}
                onChange={handleSheetChanges}
                backdropComponent={CustomBackdrop}
                handleStyle={dashStyles.handlingStyle}
                handleIndicatorStyle={dashStyles.handleIndicator}
            >
                {renderModal()}
            </BottomSheetModal>
        </ScrollView >
    )
}

export default Credentials
