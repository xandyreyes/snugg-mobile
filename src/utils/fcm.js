import messaging from '@react-native-firebase/messaging'

export const getFirebasePermissions = async () => {
	await messaging().requestPermission()
	try {
		await messaging().registerDeviceForRemoteMessages()
	} catch (err) {
		console.log('register error', err)
	}
	try {
		const fcmToken = await messaging().getToken()
		console.log({ fcmToken })
	} catch (err) {
		console.log(err, 'fcm token error')
	}
}