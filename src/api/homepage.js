import backendAPI from './config'

export const homepageAPI = async ({ lat, lon }) => {
	let response = null
	try {
		response = await backendAPI.get(`/homepage?lat=${lat}&lon=${lon}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}