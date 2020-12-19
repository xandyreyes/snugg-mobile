import axios from 'axios'

const fcmAPI = axios.create({
	baseURL: 'https://fcm.googleapis.com/fcm',
})

fcmAPI.interceptors.request.use(
	config => {
		config.headers.Authorization = 'key=AAAAPhzQCX0:APA91bGUgwg3h8NoumsjNFvEGIl9r4-YAhvHUGB9TeeNk26ABcBbTaXmpGAc20mY8fRy_0pMdLBnOzvzKkeqGb8rkJ-Yl-CrIEHxW8h9oXJfgL9H6IzsmYMVb-PC7JGbkC2oSOcguSTU'
		config.headers['Content-Type'] = 'application/json'
		return config
	},
	error => Promise.reject(error),
)

export const sendFCM = async (body) => {
	let response = null
	try {
		response = await fcmAPI.post('/send', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}