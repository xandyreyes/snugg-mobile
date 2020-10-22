import backendAPI from './config'

export const getUserAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get(`/user/info/${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getUserListingAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get(`/listing?broker_id=${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const postReviewUserAPI = async (data) => {
	let response = null
	try {
		response = await backendAPI.post('/review/create', data)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}