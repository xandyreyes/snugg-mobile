import React from 'react'
import { Alert } from 'react-native'
import { getNearbyAutocomplete } from 'src/api/googlePlacesAPI'
import { Row } from 'src/components/styledComponents'
import images from './images'
import {
	LocationIcon,
	TextBoxContainer,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default ({ region, onFocus, sessionToken, setResults, value, onChangeText }) => {


	const onChange = query => {
		onChangeText(query)
		if (sessionToken === null) {
			onFocus()
		}
		if (query !== '') {
			getNearbyAutocomplete({
				query,
				sessionToken,
				lat: region.latitude,
				lon: region.longitude
			}).then( res => {
				if (res.status === 'REQUEST_DENIED' || res.status === 'INVALID_REQUEST' || res.status === 'UNKNOWN_ERROR') {
					Alert.alert(
						'Unable to use this feature',
						'Please contact the developers and report this issue.'
					)
					return
				}
				setResults(res.predictions)
			}).catch( e => {
				console.log(e.response, '[GET NEARBY AUTOCOMPLETE ERROR]')
			})
		}
	}

	return(
		<TextBoxContainer>
			<TextInputContainer>
				<Row>
					<LocationIcon source={images.location}/>
					<TextInput 
						multiline
						value={value}
						placeholder={'Input your location'} 
						placeholderTextColor="#B4B4B4" 
						onChangeText={onChange}
						onFocus={onFocus}
					/>
				</Row>
			</TextInputContainer>
		</TextBoxContainer>
	)
}