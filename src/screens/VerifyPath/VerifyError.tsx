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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const VerifyError: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Verification Status</Text>
            </View>
            <View style={styles.subContainer1}>
                <Text style={styles.subTitle}>There was a problem with your documents. Find the details below to see the issue and how you can resolve it.</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="card-account-details-star-outline" size={18} color="#FE646F" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>Identity document</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: '400' }}>The required fields of the document are not
                        readable. Please upload a clear photo or another suitable document to continue your verification.
                        Make sure that all the corners of the document are visible. {'\n'}{'\n'}Your signature is either absent or isn’t clear.
                        Sign your identity document and provide a clear photo. Make sure that all the corners of the document are visible.</Text>
                </View>
            </View>
            <View style={{ alignSelf: 'center', margin: 20, marginTop: 50, marginBottom: 0 }}>
                <Pressable
                    style={styles.btn}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })}
                >
                    <Text style={styles.btnText}>Try Again</Text>
                </Pressable>
            </View>
            <View style={{ alignSelf: 'center', width: '80%', margin: 0 }}>
                <Text style={[styles.textStyle1]}>If you can’t find your document type or country of issue contact support</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 15 }}>
                <Text style={[styles.textStyle1]}>Powered by Liquid</Text>
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
    textStyle1: {
        color: '#000',
        fontWeight: '400', fontSize: 12,
        textAlign: 'center'
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
        height: 250,
        width: '80%',
        backgroundColor: '#FFD6D6',
        borderRadius: 15,
        padding: 15,
        marginTop: 30
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

export default VerifyError
