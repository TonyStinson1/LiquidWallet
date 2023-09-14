import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParamList } from '../../navigation/interface'
import { useAppDispatch } from '../../store/AppHooks'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Octicons'

const DIDRecovery: React.FC = () => {
    const dispatch = useAppDispatch()

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
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subTitleText}>
                        Your Recovery Seed Phrase is a 12-word phrase that is the “master key” to your liquid wallet.
                    </Text>
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
