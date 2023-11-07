import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList, PostAuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch, useAppSelector } from '../../store/AppHooks'
import { setAccessToken, setIsRegistered } from '../../store/slices/authSlice';
import SNSMobileSDK from '@sumsub/react-native-mobilesdk-module';

import Icon0 from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const IDtypes = [
    { name: 'ID Card', nav: 'BioID' },
    { name: 'Passport', nav: 'PassScan' },
    { name: 'Driving License', nav: 'FrontID' },
]

const renderIcons = (id: string) => {
    if (id == 'ID Card') {
        return (
            <Icon1 name={'idcard'} size={25} color='white' />
        )
    }
    else if (id == 'Passport') {
        return (
            <Icon2 name={'passport'} size={25} color='white' />
        )
    }
    else {
        return (
            <Icon3 name={'drive-eta'} size={25} color='white' />
        )
    }
}

const DIDVerify: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const accessToken = useAppSelector(state => state.auth.accessToken);
    const userId = useAppSelector(state => state.auth.userId);

    useEffect(() => {
        console.log("Toke   n is ", accessToken);
        console.log("userId is ", userId);
    }, [])

    let launchSNSMobileSDK = () => {

        // From your backend get an access token for the applicant to be verified.
        // The token must be generated with `levelName` and `userId`,
        // where `levelName` is the name of a level configured in your dashboard.
        //
        // The sdk will work in the production or in the sandbox environment
        // depend on which one the `accessToken` has been generated on.
        //s
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "userId": userId.length > 0 ? userId : "1214314"
        });

        let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {
            // this is a token expiration handler, will be called if the provided token is invalid or got expired
            // call your backend to fetch a new access token (this is just an example)
            return fetch('https://app.liquid.com.hk/api/sumsub/access_token', {
                method: 'POST',
                headers: myHeaders,
                body: raw
            }).then((resp: any) => {
                // return a fresh token from here
                return resp.data.token
            })
        })
            .withHandlers({ // Optional callbacks you can use to get notified of the corresponding events
                onStatusChanged: (event: any) => {
                    console.log("onStatusChanged: [" + event.prevStatus + "] => [" + event.newStatus + "]");
                },
                onLog: (event: any) => {
                    console.log("onLog: [Idensic] " + event.message);
                }
            })
            .withDebug(true)
            .withLocale('en') // Optional, for cases when you need to override the system locale
            .build();

        snsMobileSDK.launch().then((result: any) => {
            console.log("SumSub SDK State: " + JSON.stringify(result))
        }).catch((err: any) => {
            console.log("SumSub SDK Error: " + JSON.stringify(err))
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'center', margin: 20 }}>
                <Text style={styles.textStyle}>Select country where your ID document was issued</Text>
            </View>
            <Pressable style={styles.item}>
                <Image source={require('../../../assets/images/hkflag.png')} style={{ width: 25, height: 25 }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.textStyle1}>Hong Kong</Text>
                </View>
                <View style={{ position: 'absolute', top: 15, right: 5 }}>
                    <Icon0 name={'chevron-thin-right'} size={25} color='white' />
                </View>
            </Pressable>
            <View style={{ margin: 20, }}>
                <Text style={styles.textStyle}>Select your document type</Text>
            </View>
            <View>
                {
                    IDtypes.map((id: any) => {
                        return (
                            <Pressable style={{ ...styles.item, marginTop: 15 }} onPress={() => launchSNSMobileSDK()}>
                                {renderIcons(id.name)}
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={styles.textStyle1}>{id.name}</Text>
                                </View>
                                <View style={{ position: 'absolute', top: 15, right: 5 }}>
                                    <Icon0 name={'chevron-thin-right'} size={25} color='white' />
                                </View>
                            </Pressable>
                        )
                    })
                }
            </View>
            {/* <View style={{ position: 'absolute', bottom: 0 }}>
                <Text style={styles.textStyle1}>Hong Kong</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10193a',
        flex: 1
    },
    item: {
        alignSelf: 'center',
        width: '90%',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#4C5467',
        borderRadius: 15,
        flexDirection: 'row'
    },
    btn: {
        width: 250,
        height: 50,
        backgroundColor: '#1E2A59',
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    imageStyle: {
        width: 300,
        height: 400,
        resizeMode: 'contain'
    },
    textStyle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500',
    },
    textStyle1: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '400',
    },
})

export default DIDVerify
