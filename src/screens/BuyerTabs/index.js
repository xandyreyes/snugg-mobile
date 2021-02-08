import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Radar from 'react-native-radar'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Messages from '../Messages'
import UserAccount from '../UserAccount'
import BuyerHomepage from '../BuyerHomepage'
import images from './images'
import {
	HomeTapBarContainer,
	MainIcon,
	SubIcon
} from './styledComponents'

const TabDashboard = createMaterialTopTabNavigator()

Radar.on('events', (result) => {
	console.log('ONRADAREVENT', result)
})

Radar.on('error', (err) => {
	console.log('error on tracking:', err)
})

Radar.on('location', (result) => {
	console.log('location radar io:', result)
})

Radar.on('log', (result) => {
  console.log('log:', stringify(result));
});

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
							{route.name === 'BuyerHomepage' ? (
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
		<TabDashboard.Navigator initialRouteName="BuyerHomepage" tabBar={props => <HomeTabBar {...props} />} swipeEnabled={false} >
			<TabDashboard.Screen name="UserAccount" component={UserAccount} />
			<TabDashboard.Screen name="BuyerHomepage" component={BuyerHomepage} />
			<TabDashboard.Screen name="Messages" component={Messages} />
		</TabDashboard.Navigator>
	)
}

export default Home
