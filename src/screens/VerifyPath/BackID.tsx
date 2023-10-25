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

const BackID: React.FC = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const [imageUpload, setImageUpload] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginBottom: 0 }}>
                <Text style={styles.textStyle}>Scan your Back part of ID</Text>
            </View>
            <View style={[styles.contain, { marginBottom: 0 }]}>
                <Text style={styles.textStyle1}>Please click the area below to upload front part of ID.</Text>
            </View>
            <Pressable style={[styles.imageContainer, { backgroundColor: '#CCCCCC' }]}
                onPress={() => setImageUpload(true)}
            >
                {imageUpload ?
                    <Image source={require('../../../assets/images/BackID.png')} style={styles.image} />
                    :
                    // <Image source={require('../../../assets/images/upload.jpg')} style={styles.image} />
                    <Icon name={'upload'} size={70} color='#000' />
                }
            </Pressable>
            {imageUpload &&
                <View style={styles.contain}>
                    <View style={styles.titleContainer}>
                        <View style={styles.arrow}>
                            <Image source={require('../../../assets/images/arrowIn.png')} style={styles.image} />
                        </View>
                        <View>
                            <Text style={[styles.textStyle1, { fontWeight: '600' }]}>ID Card [Back].</Text>
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
                                        <Text style={[styles.textStyle1, { fontWeight: '400', fontSize: 12 }]}>Information from your document cannot be read. Make sure that the data is visible and clear. Also ensure that you selected the right document type and country.</Text>
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
                                        <Text style={[styles.textStyle1, { fontWeight: '400', fontSize: 12 }]}>Make sure that all the information on the document is visible and easy to read</Text>
                                    </View>
                                </View>
                                <View style={{ alignSelf: 'center', margin: 20, marginBottom: 0 }}>
                                    <Pressable
                                        style={styles.btn}
                                        onPress={() => navigation.navigate('ScanFace')}
                                        >
                                        <Text style={styles.btnText}>Document is readable</Text>
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
            }
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

export default BackID
