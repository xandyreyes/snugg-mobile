import React, { useState } from 'react'
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

const arr = [1, 2, 3, 4, 5, 6]

export default () => {

	const [stack, setStack] = useState(arr)

	const shiftArray = () => {
		stack.shift()
		setStack(stack)
	}

	// TODO: When empty array na, show no more cards

	return(
		<Container>
			<Card stack={stack} next={shiftArray} />
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