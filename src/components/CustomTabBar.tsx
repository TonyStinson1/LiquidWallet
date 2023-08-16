import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';

export const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#1E2A59',
        borderTopWidth: 1,
        borderTopColor: 'white',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const iconColor = isFocused ? '#FDFF6F' : '#A3A8B9';

        const iconName =
          route.name === 'Credentials'
            ? 'document-text-outline'
            : route.name === 'DIDs'
            ? 'card-outline'
            : route.name === 'Scan'
            ? 'scan-outline'
            : route.name === 'Connections'
            ? 'people-outline'
            : 'settings-outline';

        const tabStyle = {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={tabStyle}>
            <Icon name={iconName} size={24} color={iconColor} />
            <Text style={{color: iconColor, fontSize: 10}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
