import React, { useCallback, useRef, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Entypo'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PostAuthNavigationParamList } from '../../navigation/interface'
import { useNavigation } from '@react-navigation/native'
import DeleteModal from '../../components/DeleteModal'
// navigation.navigate('CreateDID')

const notifyPoints = [
    {
        type: 'file',
        message: 'Liquid sent you a credential',
        time: '',
    },
    {
        type: 'file',
        message: 'Liquid sent you a credential',
        time: '',
    },
]

const Notifications: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<PostAuthNavigationParamList>>()

    const [showTick, setShowTick] = useState(false)

    const notfiyItem = (item: any) => {
        return (
            <View style={styles.notifyContainer}>
                {/* <View style={styles.note}> */}
                <View style={{ width: '10%' }}>
                    <Image
                        source={require('../../../assets/images/drop.png')}
                        style={{ height: 30, width: 30, alignSelf: 'flex-end' }}
                    />
                </View>
                <View style={{ width: '60%', margin: 10 }}>
                    <View>
                        <Text style={{ color: '#fff' }}>F I L E received</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>Liquid sent you a credential</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>a day ago</Text>
                    </View>
                </View>
                {/* </View> */}
                <View style={{ width: '10%' }}>
                    {/* <Image
                            source={require('../../../assets/images/drop.png')}
                            style={{ height: 30, width: 30, alignSelf: 'flex-end' }}
                        /> */}
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => setShowTick(!showTick)}
                    >
                        {showTick ? (
                            <Icon1 name='square-fill' size={25} color='#00EC6D' />
                        ) : (
                            <Icon1 name='square' size={25} color='#fff' />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <FlatList data={notifyPoints} renderItem={(item) => notfiyItem(item)} />
            </View>
            <View style={{ position: 'absolute', bottom: '20%', alignSelf: 'center' }}>
                <Pressable
                    // onPress={() => dispatch(setAccessToken({ accessToken: 'sjdcbisdbsioubcsiodbv' }))}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Decrypt and recover</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252E45',
    },
    notifyContainer: {
        margin: 20,
        borderRadius: 20,
        width: '90%',
        borderColor: '#28273A',
        borderWidth: 1,
        backgroundColor: '#28273A',
        height: 120,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    // note: {
    //     justifyContent: 'center'
    // },
    btn: {
        width: 250,
        height: 40,
        backgroundColor: '#4660A4',
        marginBottom: 15,
        borderRadius: 20,
        marginRight: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default Notifications
