import React, { useEffect } from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Observer, Provider } from 'mobx-react'
import { Store } from 'src/store'
import AddListing from './AddListing'
import BrokerDashboard from './BrokerDashboard'
import CameraCapture from './CameraCapture'
import CaptureID from './CaptureID'
import EnableLocation from './EnableLocation'
import ForgotPassword from './ForgotPassword'
import LoadingScreen from './LoadingScreen'
import Login from './Login'
import PropertyProfile from './PropertyProfile'
import PreviewID from './PreviewID'
import Register from './Register'
import ResetPassword from './ResetPassword'
import SelectLocationMap from './SelectLocationMap'
import SelectSubscriptionPlan from './SelectSubscriptionPlan'
import Welcome from './Welcome'
import BrokerProfile from './BrokerProfile'
import BrokerAccountSettings from './BrokerAccountSettings'
import BrokerProperties from './BrokerProperties'

const Stack = createStackNavigator()
// const Tab = createMaterialTopTabNavigator()

export default () => {

	useEffect(() => {
		Store.hydrate()
	}, [])

	useEffect(() => {
		console.log({ User: Store.User })
	}, [])

	return(
		<Provider store={Store}>
			<Observer>
				{() => {
					return(
						<Stack.Navigator>
							<Stack.Screen name="PropertyProfile" component={PropertyProfile} options={{ headerShown: false }} />
							{ Store.User.loading && (<Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />) }
							{ Store.User.access_token ? (
								<>
									<Stack.Screen name="BrokerDashboard" component={BrokerDashboard} options={{ headerShown: false }} />
									<Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
									<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
									<Stack.Screen name="AddListing" component={AddListing} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerProfile" component={BrokerProfile} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerAccountSettings" component={BrokerAccountSettings} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerProperties" component={BrokerProperties} options={{ headerShown: false }} />
									<Stack.Screen name="SelectLocationMap" component={SelectLocationMap} options={{ headerShown: false }} />
								</>
							) : (
								<>
									
									<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
									<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
									<Stack.Screen name="Capture" component={CaptureID} options={{ headerShown: false }} />
									<Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
									<Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
									<Stack.Screen name="CameraCapture" component={CameraCapture} options={{ headerShown: false }} />
									<Stack.Screen name="PreviewID" component={PreviewID} options={{ headerShown: false }} />
									<Stack.Screen name="SelectLocationMap" component={SelectLocationMap} options={{ headerShown: false }} />
									<Stack.Screen name="SelectSubscriptionPlan" component={SelectSubscriptionPlan} options={{ headerShown: false }} />
								</>
							) }
						</Stack.Navigator>
					)
				}}
			</Observer>
		</Provider>
	)
}