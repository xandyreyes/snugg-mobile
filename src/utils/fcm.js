import messaging from '@react-native-firebase/messaging'
import { getUserAPI, userUpdateAPI } from 'src/api/auth'
import { getListingByIdAPI } from 'src/api/listing'
import { Store } from 'src/store'

export const getFirebasePermissions = async () => {
	await messaging().requestPermission()
	try {
		await messaging().registerDeviceForRemoteMessages()
	} catch (err) {
		console.log('[ERR] REGISTER REMOTE MESSAGES', err)
	}
	try {
		const fcmToken = await messaging().getToken()
		console.log({ fcmToken })
		if (fcmToken) {
			await userUpdateAPI(Store.User.data?.id, {
				device_id: fcmToken
			})
		}
	} catch (err) {
		console.log(err, '[ERR] FCM TOKEN')
		console.log(err.response, '[ERR] FCM TOKEN RESPONSE')
	}
}

export const onMessage = (navigation, messageReceived) => {
	return messaging().onMessage(async message => {
		if (message.data.type === 'brokerMatch') {
			console.log(message.data, 'HELLP')
			const listing = await getListingByIdAPI(message.data.listing)
			const user = await getUserAPI(message.data.user)
			if (listing && user) {
				navigation.navigate('Match', {
					listing: listing.data,
					user: user.data
				})
			}
		}
		if (message.data.data) {
			const parsed = JSON.parse(message.data.data)
			if (parsed.type === 'messageReceived') {
				messageReceived()
			}
		}
	})
}