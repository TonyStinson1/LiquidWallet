import React from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native'
import Icon2 from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { setAccessToken } from '../../store/slices/authSlice'
import { useAppDispatch } from '../../store/AppHooks'
import { dashStyles } from './dashboardStyles'

const CreateDID: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    return (
        <Pressable
            onPress={() => {
                // setEnableScrollViewScroll(true);
                Keyboard.dismiss()
            }}
            accessible={false}
            style={{ flex: 1, backgroundColor: '#10193a' }}
        >
            {/* <View > */}
            <View style={{ marginTop: '5%' }}>
                <View style={{ width: '80%', alignSelf: 'center', marginLeft: 10 }}>
                    <Text style={styles.btnText}>DID </Text>
                </View>
                <View style={{ marginTop: 20, width: '80%', alignSelf: 'center' }}>
                    <TextInput
                        style={{
                            width: 300,
                            backgroundColor: '#fff',
                            height: 50,
                            borderRadius: 30,
                            padding: 10,
                            paddingLeft: 20,
                        }}
                        placeholder='Default DID'
                    />
                </View>
                <View style={{ width: '80%', alignSelf: 'center', marginLeft: 10, marginTop: 20 }}>
                    <Text style={dashStyles.editText}>This will just be used for easy reference</Text>
                </View>
            </View>
            <View style={{ marginTop: '5%' }}>
                <View style={{ width: '80%', alignSelf: 'center', marginLeft: 10 }}>
                    <Text style={styles.btnText}>DID Type</Text>
                </View>
                <View style={{ marginTop: 20, width: '80%', alignSelf: 'center' }}>
                    <TextInput
                        style={{
                            width: 300,
                            backgroundColor: '#fff',
                            height: 50,
                            borderRadius: 30,
                            padding: 10,
                            paddingLeft: 20,
                        }}
                        placeholder='DID Type'
                    />
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: '20%', alignSelf: 'center' }}>
                <Pressable
                    // onPress={() => dispatch(setAccessToken({ accessToken: 'sjdcbisdbsioubcsiodbv' }))}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Save</Text>
                </Pressable>
            </View>
            {/* </View> */}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 50,
        backgroundColor: '#1E2A59',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
})

export default CreateDID
