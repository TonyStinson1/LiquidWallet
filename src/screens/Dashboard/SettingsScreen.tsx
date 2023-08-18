import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../../store/AppHooks';
import {setAccessToken} from '../../store/slices/authSlice';

const SettingsScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <TouchableOpacity
        style={{width: 70, height: 70}}
        onPress={() => dispatch(setAccessToken({accessToken: ''}))}>
        <Text style={{fontSize: 15, color: '#000'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
