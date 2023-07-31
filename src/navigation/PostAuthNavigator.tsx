import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Dashbard/Home'

// import Login from '../screens/Auth/Login'
// import Register from '../screens/Auth/Register'

const Stack = createNativeStackNavigator() //AuthNavigationParamList

export const PostAuthNavigator = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
                // options={{ header: () => <CustomHeader title='About you' /> }}
            />
        </Stack.Navigator>
    )
}
