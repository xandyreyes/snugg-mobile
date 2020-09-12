import React from 'react'
import { Row } from 'src/components/styledComponents'
import images from './images'
import {
	LocationIcon,
	TextBoxContainer,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default () => {
	return(
		<TextBoxContainer>
			<TextInputContainer>
				<Row>
					<LocationIcon source={images.location}/>
					<TextInput placeholder={'Input your location'} placeholderTextColor="#B4B4B4" />
				</Row>
			</TextInputContainer>
		</TextBoxContainer>
	)
}