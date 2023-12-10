import React, { useCallback, useRef, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { useNavigation } from '@react-navigation/native'
import DeleteModal from '../../components/DeleteModal'
import { dashStyles } from '../Dashboard/dashboardStyles'
import LinearGradient from 'react-native-linear-gradient'
// navigation.navigate('CreateDID')

const detailPoints = [
    {
        label: 'ID',
        info: 'Member Number: 12345678',
    },
    {
        label: 'Degree Name',
        info: 'Bachelor of Economics',
    },
    {
        label: 'Degree Type',
        info: 'Hong Kong University',
    },
    {
        label: 'Name',
        info: 'Kevin Chan',
    },
    {
        label: 'Email',
        info: 'KC12@gmail.com',
    },
]

const CardData: React.FC<{
    route: {
        params: any
    }
}> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const detailItem = (item) => {
        return (
            <View style={{ width: '100%', marginTop: 15, borderBottomWidth: 1, borderColor: '#fff' }}>
                <View>
                    <Text style={{ color: '#fff', fontSize: 10, fontWeight: '400' }}>{item.label}</Text>
                </View>
                <View style={{ marginTop: 6, marginBottom: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>{item.info}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <LinearGradient
                    style={dashStyles.card}
                    colors={['#222A3D', '#1C222F']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    useAngle={true}
                    angle={135}
                >
                    {/* <View style={dashStyles.card}> */}
                    <Text style={dashStyles.title}>{props.route.params.item.title}</Text>
                    <Text style={dashStyles.credential}>{props.route.params.item.credential}</Text>
                    <View style={dashStyles.bottomRow}>
                        <View>
                            <Text style={dashStyles.date}>{props.route.params.item.date}</Text>
                            {props.route.params.item.verified && (
                                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../../assets/images/verify.png')}
                                        style={dashStyles.verifiedIcon}
                                        resizeMode='contain'
                                    />
                                    <Text style={{ color: '#34CAA6', fontSize: 9, marginLeft: 5 }}>Valid</Text>
                                </View>
                            )}
                        </View>
                        <View style={dashStyles.carImage}>
                            <Image
                                source={require('../../../assets/images/liquid.png')}
                                style={dashStyles.image1Style}
                            />
                        </View>
                    </View>
                    {/* </View> */}
                    <Pressable style={styles.icon1}>
                        <Icon name={'qr-code-scanner'} size={18} color='white' />
                    </Pressable>
                    <Pressable style={styles.icon2}>
                        <Icon1 name={'ellipsis-vertical'} size={20} color='white' />
                    </Pressable>
                </LinearGradient>
            </View>
            <View>
                <View style={dashStyles.cardDetail}>{detailPoints.map((item) => detailItem(item))}</View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252E45',
    },
    icon1: {
        position: 'absolute',
        top: 25,
        right: 50,
    },
    icon2: {
        position: 'absolute',
        top: 25,
        right: 20,
    },
})

export default CardData
