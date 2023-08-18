import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useAppDispatch} from '../../store/AppHooks';
import {setAccessToken} from '../../store/slices/authSlice';

const Biometric: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const handlebiometric = async () => {
    await rnBiometrics.isSensorAvailable().then(resultObject => {
      rnBiometrics
        .simplePrompt({promptMessage: 'Confirm fingerprint'})
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            // navigation.navigate('DrawerNavigationRoutes');
            dispatch(setAccessToken({accessToken: 'sjdcbisdbsioubcsiodbv'}));
          } else {
            Alert.alert(
              'Fingerprint not exist or were deleted . Please add fingerprint in system ',
            );
          }
        })
        .catch(e => {
          Alert.alert('Fail login with senser . Please try with login');
        });
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#10193a', alignItems: 'center'}}>
      <View style={{padding: 40}}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.btnText}>Protect your wallet</Text>
        </View>
        <View style={{top: 60}}>
          <Text style={[styles.btnText, {fontSize: 15}]}>
            Use your biometric to add extra layer of security and easier way to
            access your wallet
          </Text>
        </View>
      </View>
      <View style={{top: '25%', width: '100%'}}>
        <Pressable
          onPress={() => handlebiometric()}
          style={[
            styles.btnBio,
            {backgroundColor: '#fff', alignSelf: 'center'},
          ]}>
          <View
            style={{
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon2 style={{}} name={'fingerprint'} color={'#000'} size={25} />
          </View>
          <Text style={[styles.btnText, {color: '#000'}]}>
            Use Fingerprint Identification
          </Text>
        </Pressable>
        <Pressable
          //   onPress={() => navigation.navigate('PinScreen')}
          style={[styles.btnBio, {alignSelf: 'center'}]}>
          <View
            style={{
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{}}
              name={'arrow-right-long'}
              color={'#fff'}
              size={25}
            />
          </View>
          <Text style={[styles.btnText, {color: '#fff'}]}>Do this later</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnBio: {
    width: '90%',
    height: 80,
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#1E2A59',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Biometric;
