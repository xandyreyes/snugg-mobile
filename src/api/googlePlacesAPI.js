import axios from 'axios'
import configuration from '../config'

const backendAPI = axios.create({
	baseURL: 'https://maps.googleapis.com/maps/api/place',
})

// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

export const getNearbyAutocomplete = async ({ query, lat, lon, sessionToken }) => {
	let response = null
	try {
		response = await backendAPI.get(`/autocomplete/json?input=${query}&location=${lat},${lon}&radius=500&key=${configuration.API_KEY}&sessionToken=${sessionToken}`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getPlaceDetail = async ({ placeId, sessionToken }) => {
	let response = null
	try {
		response = await backendAPI.get(`/details/json?place_id=${placeId}&key=${configuration.API_KEY}&sessionToken=${sessionToken}&fields=name,geometry,formatted_address`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}

export const getNearby = async ({ latitude, longitude }) => {
	let response = null
	try {
		response = await backendAPI.get(`/nearbysearch/json?location=${latitude},${longitude}&key=${configuration.API_KEY}&rankby=distance&type=address`)
	} catch (e) {
		return Promise.reject(e)
	}
	return response.data
}