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

import Icon from 'react-native-vector-icons/Entypo'

const ScanLoader: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const [imageUpload, setImageUpload] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../../../assets/images/Group.png')} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View style={{}}>
                    <Text style={styles.title}>ZKP Generating...</Text>
                </View>
                <View style={styles.subContainer1}>
                    <Text style={styles.subTitle}>A Zero-knowledge algorithm on your phone will now anonymize it, leaving only a verifiable proof for you to use.</Text>
                </View>
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
    imgContainer: {
        marginTop: '25%'
    },
    subContainer1: {
        width: '80%',
        marginTop: 20
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
        textAlign: 'center'
    },
    infoContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    image: {
        width: 125,
        height: 125,
        resizeMode: 'contain',
    },
})

export default ScanLoader
