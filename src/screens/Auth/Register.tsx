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

const Register: React.FC = () => {

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/images/mobile_page2.png')}
      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{top: '25%'}}>
          <Pressable onPress={() => navigation.navigate('SetupPasscode')} style={styles.btn}>
            <Text style={styles.btnText}>Create a new wallet</Text>
          </Pressable>
          <Pressable style={[styles.btn, {backgroundColor: '#fff'}]}>
            <Text style={[styles.btnText, { color: '#000' }]}>I already have a wallet</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
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
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default Register;
