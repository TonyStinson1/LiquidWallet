import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Toast from 'react-native-toast-message';
// import { toastConfig } from '../components/toastConfig'
// import LoadingScreen from '../screens/Auth/LoadingScreen'
import {PreAuthNavigator} from './PreAuthNavigator';
import {PostAuthNavigator} from './PostAuthNavigator';

const Stack = createNativeStackNavigator();

export default function Stacknavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PreAuth"
          component={PreAuthNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <Toast config={toastConfig} position="bottom" /> */}
    </NavigationContainer>
  );
}
