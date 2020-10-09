import React from 'react'
import Button from 'src/components/Button'
import {
	Container,
	Image,
	Text,
	TextHighlight
} from './styledComponents'
import images from '../images'
import { Header } from '../styledComponents'

export default () => {
	return(
		<Container>
			<Image source={images.no_location} />
			<Header>No Location</Header>
			<Text>
				<TextHighlight>Search and select a location </TextHighlight>
                or
				<TextHighlight> enable Location Permission </TextHighlight>
                to see recommendations.
			</Text>
			<Button text={'Enable Location Permission'} width={205} />
		</Container>
	)
}