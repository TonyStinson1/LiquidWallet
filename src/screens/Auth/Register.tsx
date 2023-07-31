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

const Register: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={require('../../../assets/images/mobile_page2.png')}
        style={{width: '100%', height: '100%'}}>
        <View>
          {/* <Pressable style={styles.btn} />
          <Pressable style={styles.btn} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    btn: {
      width: 250,
      height: 30,
      backgroundColor: '#1E2A59',
      borderWidth: 1
    }
  });

export default Register;
