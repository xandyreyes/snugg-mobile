import backendAPI from './config'

export const homepageAPI = async ({ lat, lon }) => {
	let response = null
	try {
		console.log(`user/homepage?lat=${lat}&lon=${lon}`)
		response = await backendAPI.get(`user/homepage?lat=${lat}&lon=${lon}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}