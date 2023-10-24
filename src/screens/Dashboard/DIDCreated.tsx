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
import { AuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch } from '../../store/AppHooks'
import { setAccessToken, setIsRegistered } from '../../store/slices/authSlice';

const DIDCreated: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()


    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textStyle}>You DID has been created.</Text>
                <View style={{ margin: 20 }}>
                    <Image source={require('../../../assets/images/DefaultDID.png')} style={styles.imageStyle} />
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Pressable onPress={() => {
                    dispatch(setIsRegistered({ isRegistered: false }))
                }
                }
                    style={styles.btn}>
                    <Text style={styles.btnText}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10193a',
        flex: 1
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
        color: '#EDEEFF',
        fontSize: 24,
        fontWeight: '500'
    }
})

export default DIDCreated
