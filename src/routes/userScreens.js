import Welcome from '../screens/Welcome'
import Home from '../screens/Tab/Home'
import EnableLocation from '../screens/EnableLocation'
import AddListing from '../screens/AddListing'
import UserAccountSettings from '../screens/UserAccountSettings'
import BrokerProperties from '../screens/BrokerProperties'
import PropertyProfile from '../screens/PropertyProfile'

export default [
	{
		name: 'Welcome',
		component: Welcome,
		options: {
			headerShown: false
		}
	}, {
		name: 'Home',
		component: Home,
		options: {
			headerShown: false
		}
	}, {
		name: 'EnableLocation',
		component: EnableLocation,
		options: {
			headerShown: false
		}
	}, {
		name: 'AddListing',
		component: AddListing,
		options: {
			headerShown: false
		}
	}, {
		name: 'UserAccountSettings',
		component: UserAccountSettings,
		options: {
			headerShown: false
		}
	}, {
		name: 'BrokerProperties',
		component: BrokerProperties,
		options: {
			headerShown: false
		}
	}, {
		name: 'PropertyProfile',
		component: PropertyProfile,
		options: {
			headerShown: false
		}
	}
]