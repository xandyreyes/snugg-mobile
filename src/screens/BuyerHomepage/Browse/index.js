import React from 'react'
import Card from './Card'
import {
	ButtonContainer,
	Container,
	HeartEmpty,
	Image,
	Like,
	Reject,
	Row
} from './styledComponents'
import images from '../images'

export default () => {
	return(
		<Container>
			<Card />
			<Row>
				<ButtonContainer>
					<Reject>
						<Image source={images.close} />
					</Reject>
				</ButtonContainer>
				<ButtonContainer>
					<Like>
						<HeartEmpty source={images.heart_empty} />
					</Like>
				</ButtonContainer>
			</Row>
		</Container>
	)
}