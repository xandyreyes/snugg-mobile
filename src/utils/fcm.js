import messaging from '@react-native-firebase/messaging'
import { userUpdateAPI } from 'src/api/auth'
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
		const parsed = JSON.parse(message.data.data)
		if (message.data.type === 'brokerMatch') {
			navigation.navigate('Match', {
				listing: message.data.listing,
				user: message.data.user
			})
		}
		if (parsed.type === 'messageReceived') {
			messageReceived()
		}
	})
}