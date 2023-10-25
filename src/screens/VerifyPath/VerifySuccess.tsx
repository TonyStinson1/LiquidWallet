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
import Icon from 'react-native-vector-icons/Feather'

const VerifySuccess: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Verification Status</Text>
            </View>
            <View style={styles.subContainer1}>
                <Text style={styles.subTitle}>Your Credential is verified. You can check it on credentials.</Text>
            </View>
            <View style={styles.subContainer2}>
                <Text style={styles.text1}>Congratulations!</Text>
            </View>
            <View style={styles.subContainer}>
                <Image source={require('../../../assets/images/tick.png')} style={styles.image} />
            </View>
            <View style={{ alignSelf: 'center', margin: 20, marginTop: 50 }}>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })}
                >
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    btn: {
        width: 250,
        height: 50,
        backgroundColor: '#4660A4',
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: '10%',
        height: 110,
        width: '80%',
        backgroundColor: '#FFD6D6',
        borderRadius: 15,
        padding: 15
    },
    subContainer2: {
        marginTop: '30%'
    },
    subContainer1: {
        width: '80%',
        marginTop: 20,
        alignSelf: 'center'
    },
    subContainer: {
        marginTop: 40
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700'
    },
    subTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400',
    },
    text1: {
        fontSize: 30,
        color: '#000',
        fontWeight: '700'
    },
    infoContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    image: {
        width: 144,
        height: 144,
        resizeMode: 'contain',
    },
})

export default VerifySuccess
