import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'

const Stack = createNativeStackNavigator() //AuthNavigationParamList

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
        </Stack.Navigator>
    )
}
