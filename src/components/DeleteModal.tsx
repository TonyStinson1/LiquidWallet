import React from 'react'
import { Modal, Pressable, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles'
// import Text from '../../../components/Text'
// import fonts from '../../../constant/fonts'
// import colors from '../../../constant/colors'

interface IModalComponent {
    visible: boolean
    text: string
    closeIt: () => void
}

const DeleteModal = (props: IModalComponent) => {
    const { visible, text, closeIt } = props
    return (
        <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={closeIt}>
            <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, backgroundColor: '#27282C' }} onPress={closeIt}>
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalViewConatiner}>
                        {/* <MaterialIcon
                            onPress={() => {}}
                            name='close'
                            size={24}
                            style={{ alignSelf: 'flex-end' }}
                            color={'#000'}
                        /> */}
                        <View style={{ alignSelf: 'center', margin: 15 }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Delete DID</Text>
                        </View>
                        <Text
                            style={[
                                styles.modalHeading,
                                { fontSize: 14, textAlign: 'center', fontWeight: '400', lineHeight: 25 },
                            ]}
                        >
                            {text}
                        </Text>
                        <View style={styles.modalbuttonContainer}>
                            <View
                                style={{ backgroundColor: 'red', width: 120, alignItems: 'center', borderRadius: 20 }}
                            >
                                <Text
                                    // onPress={}
                                    style={[styles.textStyle, { paddingVertical: 10 }]}
                                >
                                    Delete
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{ backgroundColor: 'white', width: 120, alignItems: 'center', borderRadius: 20 }}
                                onPress={closeIt}
                            >
                                <Text
                                    style={[styles.textStyle, { paddingVertical: 10, color: '#000' }]}
                                    // onPress={() => {}}
                                >
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
        </Modal>
    )
}

export default DeleteModal
