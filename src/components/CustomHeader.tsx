import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';

export interface ICustomHeader {
  title: string;
  hamburger?: boolean;
  righticon?: boolean;
  iconName?: string;
  onPress?: () => void;
}
const CustomHeader = () => {
  // const { title, hamburger, righticon, iconName, onPress } = props
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBox} onPress={navigation.goBack}>
        <Icon2
          style={{bottom: 3}}
          name={'chevron-back-outline'}
          color={'#fff'}
          size={35}
        />
        <Text style={styles.title}>{'Back'}</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{''}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: '#10193a',
    justifyContent: 'space-evenly',
  },
  iconBox: {
    height: 30,
    // marginLeft: '7%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontSize: 17
  },
  titleContainer: {alignSelf: 'center', width: '100%'},
  endContainer: {
    height: 30,
    justifyContent: 'center',
  },
});
export default CustomHeader;
