import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput, Keyboard} from 'react-native';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigationParamList} from '../../navigation/interface';

const Password: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

  return (
    <Pressable
      onPress={() => {
        // setEnableScrollViewScroll(true);
        Keyboard.dismiss();
      }}
      accessible={false}
      style={{flex: 1, backgroundColor: '#10193a', alignItems: 'center'}}>
      {/* <View > */}
        <View style={{top: '20%'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.btnText}>Enter Password</Text>
          </View>
          <View style={{marginTop: 20}}>
            <TextInput
              style={{
                width: 300,
                backgroundColor: '#fff',
                height: 50,
                borderRadius: 30,
                padding: 10,
                paddingLeft: 20,
              }}
              placeholder="Enter Password"
            />
          </View>
        </View>
        <View style={{position: 'absolute', bottom: '20%'}}>
          <Pressable
            // onPress={() => navigation.navigate('Password')}
            style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </Pressable>
        </View>
      {/* </View> */}
    </Pressable>
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

export default Password;
