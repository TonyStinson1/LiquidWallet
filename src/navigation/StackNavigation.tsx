import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Toast from 'react-native-toast-message';
// import { toastConfig } from '../components/toastConfig'
// import LoadingScreen from '../screens/Auth/LoadingScreen'
import {PreAuthNavigator} from './PreAuthNavigator';
import {PostAuthNavigator} from './PostAuthNavigator';
import {useAppSelector} from '../store/AppHooks';

const Stack = createNativeStackNavigator();

export default function Stacknavigation() {
  const accessToken = useAppSelector(state => state.auth.accessToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(accessToken.length > 0) ? (
          <Stack.Screen
            name="PostAuth"
            component={PostAuthNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="PreAuth"
            component={PreAuthNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
      {/* <Toast config={toastConfig} position="bottom" /> */}
    </NavigationContainer>
  );
}
