import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import { createStackNavigator } from '@react-navigation/stack'
import { Observer, Provider } from 'mobx-react'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import About from './About'
import AddListing from './AddListing'
import BrokerProfile from './BrokerProfile'
import BrokerTabs from './BrokerTabs'
import BuyerTabs from './BuyerTabs'
import CameraCapture from './CameraCapture'
import CaptureID from './CaptureID'
import EnableLocation from './EnableLocation'
import ForgotPassword from './ForgotPassword'
import LoadingScreen from './LoadingScreen'
import Login from './Login'
import Match from './Match'
import PreviewID from './PreviewID'
import PropertyProfile from './PropertyProfile'
import Register from './Register'
import ResetPassword from './ResetPassword'
import SelectLocationMap from './SelectLocationMap'
import SelectSubscriptionPlan from './SelectSubscriptionPlan'
import TermsAndConditions from './TermsAndConditions'
import UserAccountSettings from './UserAccountSettings'
import UserPasswordUpdate from './UserPasswordUpdate'
import BrokerSubscription from './BrokerSubscription'
import Welcome from './Welcome'

const Stack = createStackNavigator()

// TODO: Create two different stacks for Broker and Buyer

export default () => {

	useEffect(() => {
		Store.hydrate()
		const fcmessaging = messaging().onMessage(async message => {
			console.log('NOTIFICATIONS', message)
		})
		return fcmessaging
	}, [])
  
	return(
		<Provider store={Store}>
			<Observer>
				{() => {
					const { User } = Store
					console.log({ User })
					return(
						<Stack.Navigator>
							{ User.loading && (<Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />) }
							{ User.access_token ? (
								<>
									{ User.data?.type_id === UserType.broker && (
										<>
											<Stack.Screen name="BrokerTabs" component={BrokerTabs} options={{ headerShown: false }} />
											<Stack.Screen name="AddListing" component={AddListing} options={{ headerShown: false }} />
										</>
									) }
									{ User.data?.type_id === UserType.buyer && (
										<>
											<Stack.Screen name="BuyerTabs" component={BuyerTabs} options={{ headerShown: false }} />
										</>
									) }
									<Stack.Screen name="EnableLocation" component={EnableLocation} options={{ headerShown: false }} />
									<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
									<Stack.Screen name="UserAccountSettings" component={UserAccountSettings} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerProfile" component={BrokerProfile} options={{ headerShown: false }} />
									<Stack.Screen name="UserPasswordUpdate" component={UserPasswordUpdate} options={{ headerShown: false }} />
									<Stack.Screen name="PropertyProfile" component={PropertyProfile} options={{ headerShown: false }} />
									<Stack.Screen name="Match" component={Match} options={{ headerShown: false }} />
									<Stack.Screen name="BrokerSubscription" component={BrokerSubscription} options={{ headerShown: false }} />
									<Stack.Screen name="SelectSubscriptionPlan" component={SelectSubscriptionPlan} options={{ headerShown: false }} />
								</>
							) : (
								<>
									<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
									<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
									<Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
									<Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
									<Stack.Screen name="SelectSubscriptionPlan" component={SelectSubscriptionPlan} options={{ headerShown: false }} />
								</>
							) }
							<Stack.Screen name="CameraCapture" component={CameraCapture} options={{ headerShown: false }} />
							<Stack.Screen name="Capture" component={CaptureID} options={{ headerShown: false }} />
							<Stack.Screen name="PreviewID" component={PreviewID} options={{ headerShown: false }} />
							<Stack.Screen name="SelectLocationMap" component={SelectLocationMap} options={{ headerShown: false }} />
							<Stack.Screen name="About" component={About} options={{ headerShown: false }} />
							<Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{ headerShown: false }} />
						</Stack.Navigator>
					)
				}}
			</Observer>
		</Provider>
	)
}