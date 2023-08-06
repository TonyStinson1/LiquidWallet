import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigationParamList} from '../../navigation/interface';

const ImportWallet: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

  return (
    <View style={{flex: 1, backgroundColor: '#10193a', alignItems: 'center'}}>
      <View style={{top: '20%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.btnText}>Import wallet</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            alignSelf: 'center',
            padding: 15,
          }}>
          <Text style={[styles.btnText, {fontSize: 15}]}>
            If you backed up your wallet previously, you can upload the file to
            import your wallet.
          </Text>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: '20%'}}>
        <Pressable
          onPress={() => navigation.navigate('Password')}
          style={styles.btn}>
          <Text style={styles.btnText}>Import Wallet</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#1E2A59',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ImportWallet;
