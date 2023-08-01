import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import SetupPasscode from '../screens/Auth/SetupPasscode'
import CustomHeader from '../components/CustomHeader'
import PinScreen from '../screens/Auth/PinScreen'
import RePinScreen from '../screens/Auth/RePinScreen'
import Biometric from '../screens/Auth/Biometric'
import { AuthNavigationParamList } from './interface'

const Stack = createNativeStackNavigator<AuthNavigationParamList>() //AuthNavigationParamList

export const PreAuthNavigator = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
                // options={{ header: () => <CustomHeader title='About you' /> }}
            />
            <Stack.Screen
                name='SetupPasscode'
                component={SetupPasscode}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='PinScreen'
                component={PinScreen}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='RePinScreen'
                component={RePinScreen}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='Biometric'
                component={Biometric}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
        </Stack.Navigator>
    )
}
