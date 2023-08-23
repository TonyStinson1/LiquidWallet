import React from 'react';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DIDsScreen: React.FC = () => {
  const RenderItem = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.defaultDID}>Default DID</Text>
          <Icon name="ellipsis-vertical" size={20} color="white" />
        </View>
        <Text style={styles.didKey}>
          did:key:z6jsUydBDjshdbjsd... {/* Replace with your actual DID key */}
        </Text>
        <Text style={styles.createdDate}>Created: 30-06-2023 23:53:00</Text>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Pressable
            // onPress={() => navigation.navigate('SetupPasscode')}
            style={styles.btn}>
            <Text style={styles.btnText}>Share</Text>
          </Pressable>
          <Pressable
            // onPress={() => navigation.navigate('SetupPasscode')}
            style={styles.btn}>
            <Text style={styles.btnText}>Edit</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#10193A', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{width: '80%'}}>
          <Text style={{color: 'white', fontSize: 20}}>DIDs</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <View style={{width: '10%'}}>
            <Icon name="add-circle-outline" size={24} color="white" />
          </View>
          <View style={{width: '10%'}}>
            <Icon name="notifications-outline" size={24} color="white" />
          </View>
        </View>
      </View>
      <View>{RenderItem()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '90%',
    padding: 15,
    backgroundColor: '#1E2A59', // Adjust the background color as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultDID: {
    fontSize: 17,
    color: 'white',
    fontWeight: '400',
  },
  ellipsis: {
    fontSize: 24,
    color: 'white',
  },
  didKey: {
    fontSize: 12,
    marginTop: 10,
    color: '#fff',
    fontWeight: '300',
  },
  createdDate: {
    fontSize: 12,
    marginTop: 5,
    color: '#fff',
    fontWeight: '300',
  },
  btn: {
    width: 80,
    height: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 20,
    marginRight: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#000',
    fontSize: 15,
  },
});

export default DIDsScreen;
