import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { Store } from 'src/store'
import { onMessage } from 'src/utils/fcm'
import Messages from '../Messages'
import UserAccount from '../UserAccount'
import BrokerDashboard from '../BrokerDashboard'
import images from './images'
import {
	HomeTapBarContainer,
	MainIcon,
	SubIcon
} from './styledComponents'

const TabDashboard = createMaterialTopTabNavigator()

const Home = ({ navigation }) => {

	useEffect(() => {
		const fcmMessaging = onMessage(navigation)
		return fcmMessaging
	}, [])

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
							) : route.name === 'UserAccount' ? (
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
			<TabDashboard.Screen name="UserAccount" component={UserAccount} />
			<TabDashboard.Screen name="BrokerDashboard" component={BrokerDashboard} />
			<TabDashboard.Screen name="Messages" component={Messages} />
		</TabDashboard.Navigator>
	)
}

export default Home
