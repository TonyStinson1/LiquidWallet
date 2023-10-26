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

const PassScan1: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <View style={styles.container}>
           <View style={styles.imgContainer}>
                <Image source={require('../../../assets/images/passchip.png')} style={styles.image} />
           </View>
           <View style={{ marginTop: 20 }}>
                <Text style={styles.textStyle1}>Passport Scanning</Text>
           </View>
           <View style={{ marginTop: 20, alignSelf: 'center', width: '90%' }}>
                <Text style={styles.textStyle2}>Place the middle of your passport against the top of your phone</Text>
           </View>
           <View style={{ alignSelf: 'center', margin: 20, marginTop: 50 }}>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.navigate('ScanFace')}
                    >
                    <Text style={styles.btnText}>Start Scanning</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10193a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContainer: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        zIndex: 999
    },
    
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
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
    textStyle1: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500',
    },
    textStyle2: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '400',
        textAlign: 'center'
    },
})

export default PassScan1
