import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const SetupPasscode: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#10193a', alignItems: 'center'}}>
      <View style={{top: '20%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.btnText}>Setup Passcode</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={[styles.btnText, {fontSize: 15}]}>
            Add a passcode to keep your wallet safe{' '}
          </Text>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: '20%'}}>
        <Pressable
          onPress={() => navigation.navigate('PinScreen')}
          style={[styles.btn, {backgroundColor: '#fff'}]}>
          <View
            style={{
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon2 style={{}} name={'locked'} color={'#000'} size={18} />
          </View>
          <Text style={[styles.btnText, {color: '#000'}]}>Setup Passcode</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 35,
    backgroundColor: '#1E2A59',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SetupPasscode;
