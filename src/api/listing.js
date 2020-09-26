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