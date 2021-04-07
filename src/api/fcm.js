import axios from 'axios'

const fcmAPI = axios.create({
	baseURL: 'https://fcm.googleapis.com/fcm',
})

fcmAPI.interceptors.request.use(
	config => {
		config.headers.Authorization = 'key=AAAATst3b98:APA91bFuA3jxWIoUuGXJyNGQIrwwRv68lXh2mzovixvuGKp7t-RstGF4SSNwQ3yv_-1O0cBuI3YpP6yGOH3QOj6cEqJeqXQQlXZf2_ElTDtbl3WLd4D3D7NWk3NlPW2O4xeKD_SCncY8'
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
		console.log(e.response, 'SEND FCM ERR')
		return Promise.reject(e)
	}
	return response.data
}