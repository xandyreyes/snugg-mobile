import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Alert } from 'react-native'
import PushNotification from 'react-native-push-notification'
import { getListingByIdAPI } from 'src/api/listing'
import { getUserAPI } from 'src/api/user'

const PushControl = React.memo(() => {
	const navigation = useNavigation()

	useEffect(() => {
		// Must be outside of any component LifeCycle (such as `componentDidMount`).
		PushNotification.configure({
			// (optional) Called when Token is generated (iOS and Android)
			onRegister: function (token) {
				console.log('TOKEN:', token)
			},

			// (required) Called when a remote is received or opened, or local notification is opened
			onNotification: async function (notification) {
				console.log('NOTIFICATION:', notification)
				if (notification.channelId === 'fcm_fallback_notification_channel') {
					if (notification.data.type === 'brokerMatch') {
						const listing = await getListingByIdAPI(notification.data.listing)
						const user = await getUserAPI(notification.data.user)
						if (listing && user) {
							navigation.navigate('Match', {
								listing: listing.data,
								user: user.data
							})
						}
					}
					if (notification.data.data) {
						const parsed = JSON.parse(notification.data.data)
						if (parsed.type === 'messageReceived') {
							redirectToMessage(parsed.userId, parsed.listingId)
						}
					}
				} else {
					if (notification.data && notification.data.metadata) {
						redirectToListingProfile(notification.data.metadata.id)
					}
				}

				// process the notification

				// (required) Called when a remote is received or opened, or local notification is opened
				notification.finish(PushNotificationIOS.FetchResult.NoData)
			},

			// (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
			onRegistrationError: function(err) {
				console.error(err.message, err)
			},

			// IOS ONLY (optional): default: all - Permissions to register.
			permissions: {
				alert: true,
				badge: true,
				sound: true,
			},

			// Should the initial notification be popped automatically
			// default: true
			popInitialNotification: true,

			/**
* (optional) default: true
* - Specified if permissions (ios) and token (android and ios) will requested or not,
* - if not, you must call PushNotificationsHandler.requestPermissions() later
* - if you are not using remote notification or do not have Firebase installed, use this:
*     requestPermissions: Platform.OS === 'ios'
*/
			requestPermissions: true,
		})
	}, [])

	const redirectToMessage = async (userId, listingId) => {
		try {
			navigation.navigate('Conversation', { id: listingId, userId: userId})
		} catch (e) {
			Alert.alert(
				'Error',
				'Unable to retrieve listing'
			)
			console.log(e, 'ON Notification get listing error')
		}
		
	}

	const redirectToListingProfile = async (id) => {
		try {
			const listingData = await getListingByIdAPI(id)
			navigation.navigate('PropertyProfile', {
				...listingData.data
			})
		} catch (e) {
			Alert.alert(
				'Error',
				'Unable to retrieve listing'
			)
			console.log(e, 'ON Notification get listing error')
		}
		
	}
	return <></>
})

export default PushControl