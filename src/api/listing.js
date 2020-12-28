import backendAPI from './config'

export const postListingAPI = async (body) => {
	let response = null
	try {
		response = await backendAPI.post('/listing', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const likeAPI = async (listing_id) => {
	let response = null
	try {
		response = await backendAPI.put(`/listing/like?listing_id=${listing_id}`, {
			listing_id
		})
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const dislikeAPI = async (listing_id) => {
	let response = null
	try {
		response = await backendAPI.put(`/listing/dislike?listing_id=${listing_id}`, {
			listing_id
		})
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const listingUpdateAPI = async (id, body) => {
	let response = null
	try {
		response = await backendAPI.put(`/listing/${id}`, body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getLikedListingAPI = async () => {
	let response = null
	try {
		response = await backendAPI.get('/listing/like/')
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const deleteListingAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.delete(`/listing/${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getPropertyCountAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get(`/listing?broker_id=${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getMessagesAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get('/message')
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getMostLikedPropertiesAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get('/listing/count')
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getListingByIdAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.get(`/listing/${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}