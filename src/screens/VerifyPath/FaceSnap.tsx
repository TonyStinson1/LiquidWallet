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

const FaceSnap: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const [imageUpload, setImageUpload] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginBottom: 0 }}>
                <Text style={styles.textStyle}>Your Selfie</Text>
            </View>
            <Pressable style={[styles.imageContainer, { backgroundColor: '#CCCCCC' }]}
                onPress={() => setImageUpload(true)}
            >
                <Image source={require('../../../assets/images/selfie.png')} style={styles.image} />
            </Pressable>
            <View style={styles.contain}>
                <View style={styles.titleContainer}>
                    <View style={styles.arrow}>
                        <Image source={require('../../../assets/images/arrowIn.png')} style={styles.image} />
                    </View>
                    <View>
                        <Text style={[styles.textStyle1, { fontWeight: '600' }]}>Face</Text>
                    </View>
                    <View style={styles.arrow}>
                        <Image source={require('../../../assets/images/arrowIn1.png')} style={styles.image} />
                    </View>
                </View>
                {
                    imgError ?
                        <View>
                            <View style={[styles.titleContainer, { marginTop: 15, padding: 10, alignItems: 'center' }]}>
                                <View>
                                    <Icon name={'warning'} size={25} color='red' />
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={[styles.textStyle1, { fontWeight: '400', fontSize: 18 }]}>Make sure your face is clicked with a good background..</Text>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', margin: 20, }}>
                                <Pressable
                                    style={styles.btn}>
                                    <Text style={styles.btnText}>Try again</Text>
                                </Pressable>
                                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                                    <Text style={[styles.textStyle1, { fontWeight: '300', fontSize: 12 }]}>Powered by Liquid</Text>
                                </View>
                            </View>
                        </View>
                        :
                        <View>
                            <View style={styles.tileContainer}>
                                <View style={{ margin: 15 }}>
                                    <Text style={[styles.textStyle1, { fontWeight: '400', fontSize: 18 }]}>Your photo is taken successfully</Text>
                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', margin: 20, marginBottom: 0 }}>
                                <Pressable
                                    style={styles.btn}
                                    onPress={() => navigation.navigate('ScanLoader')}
                                >
                                    <Text style={styles.btnText}>Send Picture for check</Text>
                                </Pressable>
                            </View>
                            <View style={{ alignSelf: 'center', margin: 20, marginTop: 10 }}>
                                <Pressable
                                    style={[styles.btn, { backgroundColor: '#fff', borderWidth: 2, }]}>
                                    <Text style={[styles.btnText, { color: '#000' }]}>Retake photo</Text>
                                </Pressable>
                            </View>
                        </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    contain: { margin: 20, marginTop: 10 },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tileContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    arrow: {
        width: 25,
        height: 25,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    btn: {
        width: 300,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    },
    textStyle1: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
    },
})

export default FaceSnap
