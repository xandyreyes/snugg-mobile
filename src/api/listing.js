import backendAPI from './config'

export const postListingAPI = async (body) => {
	let response = null
	try {
		response = await backendAPI.post('/listing/create', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getListingAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get(`/listing?broker_id=${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const deleteListingAPI = async (listingId) => {
	let response = null
	try {
		response = await backendAPI.delete(`/listing/delete/${listingId}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}