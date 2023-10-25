import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Credentials from '../screens/Dashboard/Credentials';
import DIDsScreen from '../screens/Dashboard/DIDsScreen';
import ScanScreen from '../screens/Dashboard/ScanScreen';
import ConnectionsScreen from '../screens/Dashboard/ConnectionsScreen';
import SettingsScreen from '../screens/Dashboard/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/CustomTabBar';
import CustomHeader from '../components/CustomHeader';
import DIDEdit from '../screens/Dashboard/DIDEdit';
import CreateDID from '../screens/Dashboard/CreateDID';
import ExportDID from '../screens/Dashboard/ExportDID';
import DIDCreated from '../screens/Dashboard/DIDCreated';
import { useAppSelector } from '../store/AppHooks';
import DIDVerify from '../screens/VerifyPath/DIDVerify';
import BioID from '../screens/VerifyPath/BioID';
import ScanHKID from '../screens/VerifyPath/ScanHKID';
import FrontID from '../screens/VerifyPath/FrontID';
import BackID from '../screens/VerifyPath/BackID';
import ScanFace from '../screens/VerifyPath/ScanFace';
import FaceSnap from '../screens/VerifyPath/FaceSnap';
import ScanLoader from '../screens/VerifyPath/ScanLoader';

// import Login from '../screens/Auth/Login'
// import Register from '../screens/Auth/Register'

const Stack = createNativeStackNavigator(); //AuthNavigationParamList
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Credentials"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Credentials"
        component={Credentials}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="DIDs"
        component={DIDsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Scan" component={ScanScreen} />
      {/* <Tab.Screen name="Connections" component={ConnectionsScreen} /> */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export const PostAuthNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  const isRegistered = useAppSelector(state => state.auth.isRegistered);

  return (
    <Stack.Navigator initialRouteName={"DIDCreated"}>
      {isRegistered && <Stack.Screen
        name="DIDCreated"
        component={DIDCreated}
        options={{headerShown: false}}
        // options={{ header: () => <CustomHeader title='About you' /> }}
      />}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        // options={{ header: () => <CustomHeader title='About you' /> }}
      />
      <Stack.Screen
        name="DIDEdit"
        component={DIDEdit}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="CreateDID"
        component={CreateDID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="ExportDID"
        component={ExportDID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="DIDVerify"
        component={DIDVerify}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="BioID"
        component={BioID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="ScanHKID"
        component={ScanHKID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="FrontID"
        component={FrontID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="BackID"
        component={BackID}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="ScanFace"
        component={ScanFace}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="FaceSnap"
        component={FaceSnap}
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="ScanLoader"
        component={ScanLoader}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
