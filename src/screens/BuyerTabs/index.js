import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { get } from 'lodash'
import Radar from 'react-native-radar'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import PushNotification from 'react-native-push-notification'
import Messages from '../Messages'
import UserAccount from '../UserAccount'
import BuyerHomepage from '../BuyerHomepage'
import images from './images'
import {
	HomeTapBarContainer,
	MainIcon,
	SubIcon
} from './styledComponents'
import PushControl from '../PushControl'

const TabDashboard = createMaterialTopTabNavigator()

const sample = {
	'events': [
		{
			'_id': '6027ce82885e2a006fc45ac9', 
			'geofence': [Object], 
			'live': false, 
			'location': [Object], 
			'type': 'user.exited_geofence'
		}, {
			'_id': '6027ce82885e2a006fc45aca', 
			'geofence': [Object], 
			'live': false, 
			'location': [Object], 
			'type': 'user.entered_geofence'
		}
	], 
	'user': {
		'_id': '60214b19b352fa003e5eab51', 
		'description': 'Buyer Xandy', 
		'deviceId': 'a25d01578a61d242', 
		'foreground': true, 
		'fraud': {'proxy': false}, 
		'geofences': [[Object]], 
		'location': {'coordinates': [Array], 'type': 'Point'}, 
		'source': 'BACKGROUND_LOCATION', 
		'stopped': false, 
		'userId': '7'
	}
}

Radar.on('events', (result) => {
	if (result.events) {
		result.events.forEach((event) => {
			if (event.type === 'user.entered_geofence') {
				PushNotification.localNotification({
					title: 'An available property is nearby!', // (optional)
					message: `${get(event, 'geofence.description', 'A place')} is just a few blocks away from you!`, // (required)
					userInfo: event.geofence,
					bigPictureUrl: event.geofence?.metadata?.photo
				})
			}
		})
	}
			
})

Radar.on('error', (err) => {
	console.log('error on tracking:', err)
})

Radar.on('location', (result) => {
	console.log('location radar io:', result)
})

Radar.on('log', (result) => {
	console.log('log:', result)
})

const Home = () => {

	useEffect(() => {
		Radar.requestPermissions(true)

		Radar.getPermissionsStatus().then((result) => {
			console.log('getPermissionsStatus:', result)
		}).catch((err) => {
			console.log('getPermissionsStatus:', err)
		})

		Radar.trackOnce().then((result) => {
			console.log('trackOnce:', result)
		}).catch((err) => {
			console.log('trackOnce:', err)
		})

		try {
			Radar.startTrackingContinuous()
		} catch (err) {	
			console.log({err}, '[BACKGROUND TRACKING ERROR]')
		}
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
		<>
			<TabDashboard.Navigator initialRouteName="BuyerHomepage" tabBar={props => <HomeTabBar {...props} />} swipeEnabled={false} >
				<TabDashboard.Screen name="UserAccount" component={UserAccount} />
				<TabDashboard.Screen name="BuyerHomepage" component={BuyerHomepage} />
				<TabDashboard.Screen name="Messages" component={Messages} />
			</TabDashboard.Navigator>
			<PushControl />
		</>
	)
}

export default Home
