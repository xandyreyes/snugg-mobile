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
		await userUpdateAPI(Store.User.data?.id, {
			device_id: fcmToken
		})
	} catch (err) {
		console.log(err.response, '[ERR] FCM TOKEN')
	}
}