import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from '../../navigation/interface'
import { setAccessToken } from '../../store/slices/authSlice'
import { useAppDispatch } from '../../store/AppHooks'
import DeleteModal from '../../components/DeleteModal'

const checkPoints = [
    'Must include at least 8 characters',
    'Must include digits',
    'Must include uppercase and lowercase',
    'Must include special characters',
    'Password confirmation match',
]

const DeleteVerify: React.FC = () => {
    const dispatch = useAppDispatch()

    const [infoModal, setInfoModal] = useState(false)

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()

    const closeDown = () => {
        setInfoModal(false)
    }

    const renderPoints = (item: string) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Icon name={'check-circle'} color={'#8F8F8F'} size={20} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 15 }}>{item}</Text>
                </View>
            </View>
        )
    }

    return (
        <Pressable
            onPress={() => {
                // setEnableScrollViewScroll(true);
                Keyboard.dismiss()
            }}
            accessible={false}
            style={{ flex: 1, backgroundColor: '#10193a' }}
        >
            <View style={{ margin: 20, marginTop: 40 }}>
                <View>
                    <Text style={styles.createText}>Verify your password</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.createSubText}>This will be a verification before exporting your DID</Text>
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <View>
                    <Text style={styles.passText}>Enter password</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        placeholder={'Password'}
                        style={{ padding: 10, paddingLeft: 15, backgroundColor: '#fff', borderRadius: 7 }}
                    />
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <View>
                    <Text style={styles.passText}>Confirm password</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        placeholder={'Password'}
                        style={{ padding: 10, paddingLeft: 15, backgroundColor: '#fff', borderRadius: 7 }}
                    />
                </View>
            </View>
            {/* <View style={{ margin: 20 }}>
                {
                    checkPoints.map((check) => 
                        renderPoints(check)
                    )
                }
            </View> */}
            <View style={{ marginTop: 20, alignSelf: 'center' }}>
                <Pressable onPress={() => setInfoModal(true)} style={styles.btn}>
                    <Text style={styles.btnText}>Confirm</Text>
                </Pressable>
            </View>
            <DeleteModal
                text={
                    "This can't be undone. Verifiable credentials received through this DID will not be deleted, you can delete it manually"
                }
                visible={infoModal}
                closeIt={closeDown}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    createText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
    createSubText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 12,
    },
    passText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 15,
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
        textAlign: 'center',
    },
})

export default DeleteVerify
