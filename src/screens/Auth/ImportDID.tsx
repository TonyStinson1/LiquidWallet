import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch } from '../../store/AppHooks'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Feather'

const ImportDID: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()

    const [password, setPassword] = useState('')
    const [showSecret, setShowSecret] = useState(true)
    const [showpassword, setShowPassword] = useState(true)
    const [showconfirmPassword, setShowConfirmPassword] = useState(true)

    const passwordRef = useRef<any>(null)
    const confirmPasswordRef = useRef<any>(null)

    const secretRecoveryPhrases = [
        'Phrase 1',
        'Phrase 2',
        'Phrase 3',
        'Phrase 4',
        'Phrase 5',
        'Phrase 6',
        'Phrase 7',
        'Phrase 8',
        'Phrase 9',
        'Phrase 10',
        'Phrase 11',
        'Phrase 12',
    ]

    // Function to handle button click
    const handleButtonClick = (phrase: string) => {
        // Add your logic here when a button is clicked
        console.log(`Clicked on: ${phrase}`)
    }

    // Create an array of pairs of phrases
    const pairedPhrases: string[][] = []
    for (let i = 0; i < secretRecoveryPhrases.length; i += 2) {
        const pair: string[] = [secretRecoveryPhrases[i], secretRecoveryPhrases[i + 1]]
        pairedPhrases.push(pair)
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
                        <Icon style={{ ...styles.iconStyle, left: 10, top: 3 }} name='eye-off' color={'#fff'} size={18} />
                    ) : (
                        <Icon style={{ ...styles.iconStyle, left: 10, top: 3 }} name='eye' color={'#fff'} size={18} />
                    )}
                </TouchableOpacity>
            </View>
            {pairedPhrases.map((pair, index) => (
                <View style={styles.row} key={index}>
                    {pair.map((phrase, innerIndex) => (
                        <Pressable key={innerIndex} style={styles.button} onPress={() => handleButtonClick(phrase)}>
                            <Text style={styles.buttonText}>{` ${showSecret ? phrase : ''}`}</Text>
                        </Pressable>
                    ))}
                </View>
            ))}
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
                    onChangeText={(text) => setPassword(text)}
                    value={password}
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
            <View style={{ position: 'absolute', bottom: '0%', alignSelf: 'center' }}>
                <Pressable onPress={() => console.log('Confirm')} style={styles.btn}>
                    <Text style={styles.btnText}>Confirm</Text>
                </Pressable>
            </View>
        </Pressable>
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
    labelContainer: { width: '90%', alignSelf: 'center', marginTop: 30 },
    labelContainer1: { width: '90%', alignSelf: 'center', marginTop: 30 },
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
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
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
    },
    endIconContainer: {
        position: 'absolute',
        right: '6%',
        top: 25,
    },
})

export default ImportDID
