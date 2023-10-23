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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { setAccessToken } from '../../store/slices/authSlice';

const DIDCreated: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>()

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [showSecret, setShowSecret] = useState(true)
    const [showpassword, setShowPassword] = useState(true)
    const [showconfirmPassword, setShowConfirmPassword] = useState(true)
    const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(true)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textStyle}>You DID has been created.</Text>
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
    textStyle: {
        color: '#EDEEFF',
        fontSize: 24,
        fontWeight: '500'
    }
})

export default DIDCreated
