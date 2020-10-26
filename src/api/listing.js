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

export const likeAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.put(`/listing/like?listing_id=${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const dislikeAPI = async (id) => {
	let response = null
	try {
		response = await backendAPI.put(`/listing/dislike?listing_id=${id}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}