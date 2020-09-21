import React, { useEffect } from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'mobx-react'
import { Store } from 'src/store'
import BrokerDashboard from './BrokerDashboard'
import CameraCapture from './CameraCapture'
import CaptureID from './CaptureID'
import EnableLocation from './EnableLocation'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import PreviewID from './PreviewID'
import Register from './Register'
import ResetPassword from './ResetPassword'
import SelectLocationMap from './SelectLocationMap'
import SelectSubscriptionPlan from './SelectSubscriptionPlan'
import Welcome from './Welcome'

const Stack = createStackNavigator()
// const Tab = createMaterialTopTabNavigator()

export default () => {

	useEffect(() => {
		Store.hydrate()
	}, [])

	useEffect(() => {
		console.log({ Store: Store.User })
	}, [Store.User.access_token])

	return(
		<Provider store={Store}>
			<Stack.Navigator initialRouteName={'Login'}>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
				<Stack.Screen name="Capture" component={CaptureID} options={{ headerShown: false }} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
				<Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
				<Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
				<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
				<Stack.Screen name="CameraCapture" component={CameraCapture} options={{ headerShown: false }} />
				<Stack.Screen name="PreviewID" component={PreviewID} options={{ headerShown: false }} />
				<Stack.Screen name="SelectLocationMap" component={SelectLocationMap} options={{ headerShown: false }} />
				<Stack.Screen name="SelectSubscriptionPlan" component={SelectSubscriptionPlan} options={{ headerShown: false }} />
				<Stack.Screen name="BrokerDashboard" component={BrokerDashboard} options={{ headerShown: false }} />
			</Stack.Navigator>
		</Provider>
	)
}