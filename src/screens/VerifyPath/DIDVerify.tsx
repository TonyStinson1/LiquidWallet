import React, { useRef, useState } from 'react'
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
import { useAppDispatch } from '../../store/AppHooks'
import { setAccessToken, setIsRegistered } from '../../store/slices/authSlice';

import Icon0 from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const IDtypes = [
    { name: 'ID Card', nav: 'BioID' },
    { name: 'Passport', nav: 'PassScan' },
    { name: 'Driving License', nav: 'DriveScan' },
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
                            <Pressable style={{ ...styles.item, marginTop: 15 }} onPress={() => navigation.navigate(id.nav)}>
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
