import Welcome from '../Welcome'
import Home from '../BrokerTabs'
import EnableLocation from '../EnableLocation'
import AddListing from '../AddListing'
import BrokerAccountSettings from '../BrokerAccountSettings'
import BrokerProperties from '../BrokerProperties'
import PropertyProfile from '../PropertyProfile'

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
		name: 'BrokerAccountSettings',
		component: BrokerAccountSettings,
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