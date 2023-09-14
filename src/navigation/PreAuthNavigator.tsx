import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import SetupPasscode from '../screens/Auth/SetupPasscode'
import CustomHeader from '../components/CustomHeader'
import PinScreen from '../screens/Auth/PinScreen'
import RePinScreen from '../screens/Auth/RePinScreen'
import Biometric from '../screens/Auth/Biometric'
import { AuthNavigationParamList } from './interface'
import ImportWallet from '../screens/Auth/ImportWallet'
import Password from '../screens/Auth/Password'
import ImportDID from '../screens/Auth/ImportDID'
import CreateDID from '../screens/Auth/CreateDID'
import DIDRecovery from '../screens/Auth/DIDRecovery'

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
                component={RePinScreen as any}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='Biometric'
                component={Biometric}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='ImportWallet'
                component={ImportWallet}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='Password'
                component={Password}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='ImportDID'
                component={ImportDID}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='CreateDID'
                component={CreateDID}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
            <Stack.Screen
                name='DIDRecovery'
                component={DIDRecovery}
                // options={{ headerShown: false }}
                options={{ header: () => <CustomHeader /> }}
            />
        </Stack.Navigator>
    )
}
