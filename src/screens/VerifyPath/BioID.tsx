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

import Icon from 'react-native-vector-icons/AntDesign'

const BioID: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.textStyle}>Scan your ID</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={styles.textStyle1}>Use iAM Smart</Text>
            </View>
            <View style={{ top: '40%' }}>
                <View style={styles.btn}>
                    <Image source={require('../../../assets/images/phone.png')} style={styles.image} />
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={styles.textStyle1}>Personal data from iAM Smart</Text>
                    </View>
                </View>
                <Pressable style={[styles.btn, { backgroundColor: '#4C5467', }]} onPress={() => navigation.navigate('ScanHKID')}>
                    {/* <Image source={require('../../../assets/images/phone.png')} style={styles.image} /> */}
                    <Icon
                        style={{}}
                        name='arrowright'
                        color={'#fff'}
                        size={25}
                    />
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={styles.textStyle1}>Scanning Right Now</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10193a',
        flex: 1
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    btn: {
        padding: 20,
        height: 70,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#2B7366',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
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

export default BioID
