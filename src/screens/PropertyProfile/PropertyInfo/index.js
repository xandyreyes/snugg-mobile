import React from 'react'
import {
	Container,
	Location,
	Name,
	NameContainer,
	PinIcon,
	Verified
} from './styledComponents'
import images from '../images'

export default () => {
	return(
		<Container>
			<NameContainer>
				<Name>Lalalalisa Manoban</Name>
				<Verified source={images.verified} />
			</NameContainer>
			<NameContainer>
				<PinIcon source={images.pin_location} />
				<Location>Greenhills, San Juan City</Location>
			</NameContainer>
		</Container>
	)
}