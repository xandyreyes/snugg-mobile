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