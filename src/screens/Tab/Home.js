import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TouchableOpacity } from 'react-native'
import Messages from '../Messages'
import BrokerProfile from '../BrokerProfile'
import BrokerDashboard from '../BrokerDashboard'
import {
	HomeTapBarContainer,
	MainIcon,
	SubIcon
} from './styledComponents'

const TabDashboard = createMaterialTopTabNavigator()

const Home = () => {

	const HomeTabBar = ({ navigationState, navigation }) => {
		return (
			<HomeTapBarContainer>
				{navigationState.routes.map((route, index) => 
					<TouchableOpacity
						key={index}
						onPress={() => navigation.navigate(route.name)}
						activeOpacity={1}>
						{route.name === 'BrokerDashboard' ? (
							<MainIcon />
						) : route.name === 'BrokerProfile' ? (
							<SubIcon />
						) : route.name === 'Messages' && (
							<SubIcon />
						)}
					</TouchableOpacity>
				)}
			</HomeTapBarContainer>
		)
	}

	return (
		<TabDashboard.Navigator initialRouteName="BrokerDashboard" tabBar={props => <HomeTabBar {...props} />} swipeEnabled={false} >
			<TabDashboard.Screen name="BrokerProfile" component={BrokerProfile} />
			<TabDashboard.Screen name="BrokerDashboard" component={BrokerDashboard} />
			<TabDashboard.Screen name="Messages" component={Messages} />
		</TabDashboard.Navigator>
	)
}

export default Home
