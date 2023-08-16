import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Credentials from '../screens/Dashboard/Credentials';
import DIDsScreen from '../screens/Dashboard/DIDsScreen';
import ScanScreen from '../screens/Dashboard/ScanScreen';
import ConnectionsScreen from '../screens/Dashboard/ConnectionsScreen';
import SettingsScreen from '../screens/Dashboard/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { CustomTabBar } from '../components/CustomTabBar';

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
        'tabBarHideOnKeyboard': true
      }}
      >
      <Tab.Screen
        name="Credentials"
        component={Credentials}
        options={{headerShown: false}}
      />
      <Tab.Screen name="DIDs" component={DIDsScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Connections" component={ConnectionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export const PostAuthNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        // options={{ header: () => <CustomHeader title='About you' /> }}
      />
    </Stack.Navigator>
  );
};
