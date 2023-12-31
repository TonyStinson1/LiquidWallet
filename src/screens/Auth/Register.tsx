import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigationParamList } from '../../navigation/interface';

const Register: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

  return (
    // <ImageBackground
    //   source={require('../../../assets/images/Login.png')}
    //   style={{width: '100%', height: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#101A3A'
        }}>
        <View>
          <Image source={require('../../../assets/images/register.png')} style={{ width: 150, height: 70, resizeMode: 'contain' }} />
        </View>
        <View style={{ top: '15%' }}>
          <Pressable onPress={() => navigation.navigate('SetupPasscode')} style={styles.btn}>
            <Text style={styles.btnText}>Create a new wallet</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ImportWallet')} style={[styles.btn, {backgroundColor: '#fff'}]}>
            <Text style={[styles.btnText, { color: '#000' }]}>I already have a wallet</Text>
          </Pressable>
        </View>
      </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 230,
    height: 40,
    backgroundColor: '#1E2A59',
    marginBottom: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default Register;
