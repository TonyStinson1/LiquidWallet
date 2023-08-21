import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use any icon library of your choice
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigationParamList } from '../../navigation/interface';

interface KeyButtonProps {
  digit: string;
  onPress: (digit: string) => void;
  disabled?: boolean;
}

const PinScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

  const [pin, setPin] = useState('');

  const handlePinInput = (digit: string) => {
    if (pin.length < 6) {
      setPin(prevPin => prevPin + digit);
    }
  };

  useEffect(() => {
    if (pin.length === 6) {
      navigation.navigate('RePinScreen', { pin });
    }
  }, [pin, navigation]);

  const handleBackspace = () => {
    setPin(prevPin => prevPin.slice(0, -1));
  };

  const KeyButton: React.FC<KeyButtonProps> = ({digit, onPress, disabled}) => {
    return (
      <TouchableOpacity
        style={[styles.keyButton, disabled && styles.disabledButton]}
        onPress={() => onPress(digit)}
        disabled={disabled}>
        {digit === 'backspace' ? (
          <Icon name="backspace" size={24} color="#fff" />
        ) : (
          <Text style={styles.keyText}>{digit}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.passcodeTextContainer}>
        <Text style={styles.passcodeText}>Create your passcode</Text>
      </View>
      <View style={styles.pinContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index < pin.length && styles.filledDot]}
          />
        ))}
      </View>
      <View style={styles.keypadContainer}>
        <View style={styles.row}>
          <KeyButton digit="1" onPress={() => handlePinInput('1')} />
          <KeyButton digit="2" onPress={() => handlePinInput('2')} />
          <KeyButton digit="3" onPress={() => handlePinInput('3')} />
        </View>
        <View style={styles.row}>
          <KeyButton digit="4" onPress={() => handlePinInput('4')} />
          <KeyButton digit="5" onPress={() => handlePinInput('5')} />
          <KeyButton digit="6" onPress={() => handlePinInput('6')} />
        </View>
        <View style={styles.row}>
          <KeyButton digit="7" onPress={() => handlePinInput('7')} />
          <KeyButton digit="8" onPress={() => handlePinInput('8')} />
          <KeyButton digit="9" onPress={() => handlePinInput('9')} />
        </View>
        <View style={styles.row}>
          <KeyButton digit=" " disabled />
          <KeyButton digit="0" onPress={() => handlePinInput('0')} />
          <KeyButton digit="backspace" onPress={handleBackspace} />
        </View>
      </View>
      {/* <View style={{position: 'absolute', bottom: '15%'}}>
        <Pressable
          onPress={() => navigation.navigate('RePinScreen', { pin })}
          style={[styles.btn]} disabled={pin.length < 6} >
          <Text style={[styles.btnText]}>Enter</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10193a',
  },
  passcodeTextContainer: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#10193a',
    marginHorizontal: 8,
  },
  filledDot: {
    backgroundColor: 'white',
  },
  keypadContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  keyButton: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#10193a',
  },
  disabledButton: {
    backgroundColor: 'transparent',
  },
  keyText: {
    fontSize: 24,
    color: 'white',
  },
  passcodeText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20.5,
  },
  btn: {
    width: 250,
    height: 45,
    backgroundColor: '#1E2A59',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default PinScreen;
