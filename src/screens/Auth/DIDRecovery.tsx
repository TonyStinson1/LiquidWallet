import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Keyboard,
    TouchableOpacity,
    TouchableOpacityBase,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch } from '../../store/AppHooks'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Octicons'

const DIDRecovery: React.FC = () => {
    const dispatch = useAppDispatch()

    const [showSecret, setShowSecret] = useState(false)
    const [showTick, setShowTick] = useState(false)

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()

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
                <Text style={styles.btnText}>Create DID Account</Text>
            </View>
            <View style={styles.labelContainer}>
                <View>
                    <Text style={styles.titleText}>Recovery Seed Phrase</Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        marginTop: 15,
                        marginBottom: 15,
                        height: 100,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        padding: 10,
                    }}
                >
                    {!showSecret ? (
                        <Image
                            style={{ position: 'absolute', zIndex: 999 }}
                            source={require('../../../assets/images/blur.png')}
                        />
                    ) : (
                        <Text style={{ fontSize: 12, color: '#000' }}>
                            century chair easy frost crucial swim walnut shoulder affair chase sound ceiling
                        </Text>
                    )}
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 20, bottom: 15 }}
                        onPress={() => setShowSecret(!showSecret)}
                    >
                        {!showSecret ? (
                            <Icon
                                style={{ ...styles.iconStyle, left: 10, top: 3 }}
                                name='eye-off'
                                color={'#000'}
                                size={18}
                            />
                        ) : (
                            <Icon
                                style={{ ...styles.iconStyle, left: 10, top: 3 }}
                                name='eye'
                                color={'#000'}
                                size={18}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subTitleText}>
                        Your Recovery Seed Phrase is a 12-word phrase that is the “master key” to your liquid wallet.
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: '20%' }}>
                {showSecret && (
                    <View
                        style={[styles.labelContainer, { marginTop: 30, flexDirection: 'row', alignItems: 'center' }]}
                    >
                        <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => setShowTick(!showTick)}
                        >
                            {showTick ? (
                                <Icon1 name='square-fill' size={15} color='#00EC6D' />
                            ) : (
                                <Icon1 name='square' size={15} color='#fff' />
                            )}
                        </TouchableOpacity>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.subTitleText}>I saved my Secret Recovery Phrase</Text>
                        </View>
                    </View>
                )}
                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <Pressable disabled={!showTick} onPress={() => navigation.navigate('Biometric')} style={styles.btn}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </Pressable>
                </View>
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
    iconStyle: {},
    titleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
    subTitleText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
    },
    labelContainer: { width: '90%', alignSelf: 'center', marginTop: 30 },
})

export default DIDRecovery
