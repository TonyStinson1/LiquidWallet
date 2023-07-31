/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
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
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Stacknavigation from './src/navigation/StackNavigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'#10193a'}
      />
      <Stacknavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 30,
    backgroundColor: '#1E2A59',
    borderWidth: 1,
  },
});

export default App;
