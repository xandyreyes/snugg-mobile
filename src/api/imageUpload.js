import storage from '@react-native-firebase/storage'

export const createRef = (storageName) => {
	const randomName = `${randomString(9)}-${Date.now()}`
	return storage().ref(`${storageName}/${randomName}`)
}

export const uploadToFirebase = (instance, uploadUri) => {
	return instance.putFile(uploadUri)
}

const randomString = length => {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	var result = ''
	for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))]
	return result
}