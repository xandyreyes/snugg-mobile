import axios from 'axios'
import configs from 'src/config'

const radarAPI = axios.create({
	baseURL: 'https://api.radar.io/v1/geofences/',
})

radarAPI.interceptors.request.use(
	config => {
		config.headers.Authorization = configs.radarServerKey
		return config
	},
	error => Promise.reject(error),
)

export const saveGeofence = async (body) => {
	let response = null
	try {
		response = await radarAPI.post('/', body)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}