import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Credentials = () => {
  return (
    <ScrollView style={{backgroundColor: '#10193A', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Credentials</Text>
        <Icon name="notifications-outline" size={24} color="white" />
        <Icon name="add-circle-outline" size={24} color="white" />
      </View>
      <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              paddingVertical: 5,
              paddingHorizontal: 10,
              flex: 0.85,
            }}
            placeholder="Search"
          />
          <Icon name="filter-outline" size={24} color="white" />
        </View>
        {/* Collapsible Filter List */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color: 'white', marginRight: 10}}>
            Date issued (newest to oldest)
          </Text>
          <Icon name="chevron-up" size={24} color="white" />
        </TouchableOpacity>
        {/* Template Profile Icon */}
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={{width: 140, height: 140}}
          />
        </View>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
          You will see your credential here once you accept them
        </Text>
      </View>
      {/* Bottom Container */}
      <View
        style={{
          backgroundColor: '#1E2A59',
          width: '80%',
          alignSelf: 'center',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: 'white',
        }}>
        {/* Bottom Tab Navigator */}
      </View>
    </ScrollView>
  );
};

export default Credentials;
