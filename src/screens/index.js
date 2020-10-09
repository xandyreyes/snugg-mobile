import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Observer, Provider } from 'mobx-react'
import { Store } from 'src/store'
import AddListing from './AddListing'
import BrokerAccountSettings from './BrokerAccountSettings'
import BrokerProfile from './BrokerProfile'
import BrokerTabs from './BrokerTabs'
import BuyerTabs from './BuyerTabs'
import CameraCapture from './CameraCapture'
import CaptureID from './CaptureID'
import EnableLocation from './EnableLocation'
import ForgotPassword from './ForgotPassword'
import LoadingScreen from './LoadingScreen'
import Login from './Login'
import PreviewID from './PreviewID'
import Register from './Register'
import ResetPassword from './ResetPassword'
import SelectLocationMap from './SelectLocationMap'
import SelectSubscriptionPlan from './SelectSubscriptionPlan'
import Welcome from './Welcome'

const Stack = createStackNavigator()

export default () => {

	useEffect(() => {
		Store.hydrate()
	}, [])
  
	return(
		<Provider store={Store}>
			<Observer>
				{() => {
					return(
						<Stack.Navigator>
							<Stack.Screen name="BuyerTabs" component={BuyerTabs} options={{ headerShown: false }} />
							{ Store.User.loading && (<Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />) }
							{ Store.User.access_token ? (
								<>
									<Stack.Screen name="BrokerTabs" component={BrokerTabs} options={{ headerShown: false }} />
									<Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
									<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
									<Stack.Screen name="AddListing" component={AddListing} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerAccountSettings" component={BrokerAccountSettings} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerProfile" component={BrokerProfile} options={{ headerShown: false }} />
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