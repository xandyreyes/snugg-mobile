import backendAPI from './config'

export const signUpAPI = async (body) => {
	let response = null
	try {
		response = await backendAPI.post('/auth/signup', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const loginAPI = async (body) => {
	let response = null
	try {
		response = await backendAPI.post('/auth/login', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}