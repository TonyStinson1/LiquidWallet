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

const ScanFace: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.textStyle}>Scan your face</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={styles.textStyle1}>Scan your face to verify the consistency of you and the ID you just uploaded. Please click the button below to continue.</Text>
            </View>
            <View style={{ margin: 20, alignItems: 'center' }}>
                <Image source={require('../../../assets/images/Face.png')} style={styles.image} />
            </View>
            <View style={{ alignSelf: 'center', margin: 20, marginTop: 50 }}>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.navigate('FaceSnap')}
                >
                    <Text style={styles.btnText}>Continue</Text>
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
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
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

export default ScanFace
