import storage from '@react-native-firebase/storage'
import configuration from '../config'

export const createPRCRef = () => {
	const randomName = `${randomString(9)}-${Date.now()}`
	return storage().ref(`${configuration.firebase_storage.prc_id}/${randomName}`)
}

export const uploadPRCID = (instance, uploadUri) => {
	return instance.putFile(uploadUri)
}

const randomString = length => {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	var result = ''
	for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))]
	return result
}