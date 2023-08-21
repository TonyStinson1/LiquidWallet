import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CustomBackdrop from '../../components/CustomBackdrop';

const Credentials = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = [1, '70%'];

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#10193A', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={{width: '80%'}}>
          <Text style={{color: 'white', fontSize: 20}}>Credentials</Text>
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
      <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            width: '100%',
          }}>
          <View style={{width: '85%'}}>
            <TextInput
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 5,
                paddingLeft: 20,
                flex: 0.85,
              }}
              placeholder="Search"
            />
          </View>
          {/* <Icon name="filter-outline" size={24} color="white" /> */}
          <View style={{marginLeft: 20}}>
            <Image
              source={require('../../../assets/images/searchFilter.png')}
              style={{width: 35, height: 35, resizeMode: 'contain'}}
            />
          </View>
        </View>
        {/* Collapsible Filter List */}
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 20,
          }}>
          <Text style={{color: 'white', marginRight: 10}}>
            Date issued (newest to oldest)
          </Text>
          <Icon name="chevron-down" size={24} color="white" />
        </TouchableOpacity>
        {/* Template Profile Icon */}
        <View style={{alignItems: 'center', margin: 60}}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={{width: 140, height: 140}}
          />
        </View>
        <View style={{margin: 20}}>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
            You will see your credential here once you accept them
          </Text>
        </View>
      </View>
      {/* Bottom Container */}
      <View
        style={{
          backgroundColor: '#1E2A59',
          width: '80%',
          height: 90,
          alignSelf: 'center',
          padding: 15,
          borderRadius: 5,
        }}>
        <View>
          <Image
            source={require('../../../assets/images/passport.png')}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 14}}>
            Proof of citizenship (PoC)
          </Text>
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 11}}>
            Based on US-Passport
          </Text>
        </View>
        {/* Bottom Tab Navigator */}
        <View
          style={{
            position: 'absolute',
            padding: 3,
            right: 10,
            top: 10,
            width: 130,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#000', fontSize: 8}}>
            Expires on: Aug, 31st 2024
          </Text>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={CustomBackdrop}
        handleStyle={styles.handlingStyle}
        >
        <View style={styles.contentContainer}>
          <Text style={{ color: 'white' }}>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  handlingStyle: {
    backgroundColor: '#10193A',
  },
  contentContainer: {
    backgroundColor: '#10193A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Credentials;
