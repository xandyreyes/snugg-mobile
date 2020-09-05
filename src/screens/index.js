import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CaptureID from './CaptureID';
import EnableLocation from './EnableLocation';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Welcome from './Welcome';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Capture" component={CaptureID} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}