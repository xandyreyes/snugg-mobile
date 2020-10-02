import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Messages from '../Messages'
import BrokerProfile from '../BrokerProfile'
import BrokerDashboard from '../BrokerDashboard'
import images from './images'
import {
	HomeTapBarContainer,
	MainIcon,
	SubIcon
} from './styledComponents'

const TabDashboard = createMaterialTopTabNavigator()

const Home = () => {

	const HomeTabBar = ({ navigationState, navigation }) => {
		return (
			<SafeAreaView>
				<HomeTapBarContainer>
					{navigationState.routes.map((route, index) => 
						<TouchableOpacity
							key={index}
							onPress={() => navigation.navigate(route.name)}
							activeOpacity={1}>
							{route.name === 'BrokerDashboard' ? (
								<MainIcon source={images.logo} />
							) : route.name === 'BrokerProfile' ? (
								<SubIcon source={images.user} />
							) : route.name === 'Messages' && (
								<SubIcon source={images.messages} />
							)}
						</TouchableOpacity>
					)}
				</HomeTapBarContainer>
			</SafeAreaView>
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
