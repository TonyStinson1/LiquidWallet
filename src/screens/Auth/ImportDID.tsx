import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch } from '../../store/AppHooks'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Feather'
import Clipboard from '@react-native-clipboard/clipboard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { setAccessToken, setIsRegistered } from '../../store/slices/authSlice';

const ImportDID: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [showSecret, setShowSecret] = useState(true)
    const [showpassword, setShowPassword] = useState(true)
    const [showconfirmPassword, setShowConfirmPassword] = useState(true)
    const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(true)

    const [phrase1, setPhrase1] = useState('')
    const [phrase2, setPhrase2] = useState('')
    const [phrase3, setPhrase3] = useState('')
    const [phrase4, setPhrase4] = useState('')
    const [phrase5, setPhrase5] = useState('')
    const [phrase6, setPhrase6] = useState('')
    const [phrase7, setPhrase7] = useState('')
    const [phrase8, setPhrase8] = useState('')
    const [phrase9, setPhrase9] = useState('')
    const [phrase10, setPhrase10] = useState('')
    const [phrase11, setPhrase11] = useState('')
    const [phrase12, setPhrase12] = useState('')

    const passwordRef = useRef<any>(null)
    const confirmPasswordRef = useRef<any>(null)

    const handlePaste = async (text: string) => {
        try {
            const phrases = text.split(' ')

            // Assign phrases to state variables
            setPhrase1(phrases[0] || '')
            setPhrase2(phrases[1] || '')
            setPhrase3(phrases[2] || '')
            setPhrase4(phrases[3] || '')
            setPhrase5(phrases[4] || '')
            setPhrase6(phrases[5] || '')
            setPhrase7(phrases[6] || '')
            setPhrase8(phrases[7] || '')
            setPhrase9(phrases[8] || '')
            setPhrase10(phrases[9] || '')
            setPhrase11(phrases[10] || '')
            setPhrase12(phrases[11] || '')
        } catch (error) {
            console.error('Error reading clipboard content:', error)
        }
    }

    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            extraScrollHeight={Platform.select({ android: -Dimensions.get('window').height - 200 })}
            scrollEnabled={enableScrollViewScroll}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ flex: 1, backgroundColor: '#10193a' }}
        >
            <Pressable
                onPress={() => {
                    // setEnableScrollViewScroll('');
                    setEnableScrollViewScroll(true)
                    Keyboard.dismiss()
                }}
                accessible={false}
                style={{ flex: 1, backgroundColor: '#10193a' }}
            >
                <View style={styles.labelContainer}>
                    <Text style={styles.btnText}>Import DID Account</Text>
                </View>
                <View style={[styles.labelContainer1, { flexDirection: 'row' }]}>
                    <Text style={styles.btnText1}>Secret Recovery Phrase (12 words)</Text>
                    <TouchableOpacity
                        onPress={() => setShowSecret(!showSecret)}
                    // style={styles.endIconContainer}
                    >
                        {showSecret ? (
                            <Icon
                                style={{ ...styles.iconStyle, left: 10, top: 3 }}
                                name='eye-off'
                                color={'#fff'}
                                size={18}
                            />
                        ) : (
                            <Icon
                                style={{ ...styles.iconStyle, left: 10, top: 3 }}
                                name='eye'
                                color={'#fff'}
                                size={18}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={[styles.inputContainer, { marginTop: 15 }]}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase1}
                            onChangeText={(text) => handlePaste(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase2}
                            onChangeText={(text) => setPhrase2(text)}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase3}
                            onChangeText={(text) => setPhrase3(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase4}
                            onChangeText={(text) => setPhrase4(text)}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase5}
                            onChangeText={(text) => setPhrase5(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase6}
                            onChangeText={(text) => setPhrase6(text)}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase7}
                            onChangeText={(text) => setPhrase7(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase8}
                            onChangeText={(text) => setPhrase8(text)}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase9}
                            onChangeText={(text) => setPhrase9(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase10}
                            onChangeText={(text) => setPhrase10(text)}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase11}
                            onChangeText={(text) => setPhrase11(text)}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput
                            style={[styles.input, styles.extraInput]}
                            placeholder='Enter Phrase'
                            value={phrase12}
                            onChangeText={(text) => setPhrase12(text)}
                        />
                    </View>
                </View>
                <View style={styles.labelContainer1}>
                    <Text style={styles.btnText1}>Set Password</Text>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Icon1 style={styles.iconStyle} name='lock' color={'#000'} size={18} />
                    </View>
                    <TextInput
                        style={[styles.input]}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder='Enter'
                        secureTextEntry={showpassword}
                        returnKeyType='done'
                        onSubmitEditing={() => confirmPasswordRef.current.focus()}
                        ref={passwordRef}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showpassword)} style={styles.endIconContainer}>
                        {showpassword ? (
                            <Icon style={{ ...styles.iconStyle, right: 10 }} name='eye-off' color={'#000'} size={18} />
                        ) : (
                            <Icon style={{ ...styles.iconStyle, right: 10 }} name='eye' color={'#000'} size={18} />
                        )}
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Icon1 style={styles.iconStyle} name='lock' color={'#000'} size={18} />
                    </View>
                    <TextInput
                        style={[styles.input]}
                        onChangeText={(text) => setConfPassword(text)}
                        value={confPassword}
                        placeholder='Re-Enter'
                        secureTextEntry={showconfirmPassword}
                        returnKeyType='done'
                        ref={confirmPasswordRef}
                    />
                    <TouchableOpacity
                        onPress={() => setShowConfirmPassword(!showconfirmPassword)}
                        style={styles.endIconContainer}
                    >
                        {showconfirmPassword ? (
                            <Icon style={{ ...styles.iconStyle, right: 10 }} name='eye-off' color={'#000'} size={18} />
                        ) : (
                            <Icon style={{ ...styles.iconStyle, right: 10 }} name='eye' color={'#000'} size={18} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Pressable onPress={() => {
                        dispatch(setIsRegistered({ isRegistered: true }))
                        dispatch(setAccessToken({ accessToken: 'sjdcbisdbsioubcsiodbv' }))
                    }
                    } style={styles.btn}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </Pressable>
                </View>
            </Pressable>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 50,
        backgroundColor: '#1E2A59',
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    extraInput: { height: 40, paddingLeft: 10, marginTop: 0 },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    btnText1: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '400',
    },
    inputContainer: { flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 0 },
    labelContainer: { width: '90%', alignSelf: 'center', marginTop: 30 },
    labelContainer1: { width: '90%', alignSelf: 'center', marginTop: 20 },
    container: {
        flex: 1,
        flexDirection: 'row', // Arrange blocks horizontally
        justifyContent: 'space-between', // Add space between blocks
        padding: 16, // Adjust as needed
    },
    blockContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
        padding: 8, // Adjust as needed
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        height: 30,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        width: 50,
    },
    number: {
        marginRight: 8, // Adjust as needed
        fontWeight: 'bold',
    },
    phrase: {
        flex: 1, // Take remaining space in the row
    },
    iconContainer: {
        position: 'absolute',
        left: '8%',
        top: 25,
        zIndex: 999,
    },
    iconStyle: {},
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        paddingLeft: 45,
        width: '90%',
        height: 50,
        marginTop: 10,
        marginBottom: 16,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        color: '#000'
    },
    endIconContainer: {
        position: 'absolute',
        right: '6%',
        top: 25,
    },
})

export default ImportDID
