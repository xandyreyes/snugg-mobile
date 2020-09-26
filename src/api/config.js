import axios from 'axios'
import { get } from 'lodash'
import { Store } from 'src/store'
import configuration from '../config'

const backendAPI = axios.create({
	baseURL: configuration.baseURL,
})

backendAPI.interceptors.request.use(
	config => {
		const token = get(Store, 'User.access_token', '')
		if (Store.User.access_token && token.length > 0) {
			config.headers.Authorization = `Bearer ${Store.User.access_token}`
			config.headers['Content-Type'] = 'application/json'
		}
		return config
	},
	error => Promise.reject(error),
)

export default backendAPI