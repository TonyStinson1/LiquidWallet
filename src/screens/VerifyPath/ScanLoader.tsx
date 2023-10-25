import React, { useEffect, useRef, useState } from 'react'
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
import Icon from 'react-native-vector-icons/Feather'
import ProgressBar from 'react-native-progress/Bar';

const ScanLoader: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const [progress, setProgress] = useState(0.5)

    useEffect(() => {
        setTimeout(() => {
            setProgress(1)
            navigation.navigate('VerifySuccess')
            // navigation.navigate('VerifyError')
        }, 5000);
    }, [])

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
            <View style={{ marginTop: 30 }}>
                <ProgressBar progress={progress} width={250} animated={true} color={'#1E2A59'} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.numberText}>{progress == 0.5 ? '50%' : '100%'}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="info" size={18} color="#FE646F" />
                    <View style={{marginLeft: 10 }}>
                        <Text style={{ color: '#930000', fontSize: 16, fontWeight: '600' }}>Notice</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: '#930000', fontSize: 12, fontWeight: '500' }}>Please do not leave this page. We are generating your ZKP. It may take up to a few minutes.</Text>
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
    bottomContainer: {
        position: 'absolute',
        bottom: '10%',
        height: 110,
        width: '80%',
        backgroundColor: '#FFD6D6',
        borderRadius: 15,
        padding: 15
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
    numberText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '700'
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
