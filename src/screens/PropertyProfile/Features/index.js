import React from 'react'
import {
	Block,
	CheckIcon,
	Container,
	Header,
	Label,
	Wrapper
} from './styledComponents'
import images from '../images'

const features = [
	'Air Conditioning',
	'Balcony',
	'Concrete Flooring',
	'Garage',
	'Appliances',
	'Bedding',
	'Fully Furnished',
	'Heating'
]

const Features = () => {
	return (
		<Container>
			<Header>Features</Header>
			<Wrapper>
				{features.map((feat, index) =>
					<Block key={index}>
						<CheckIcon source={images.check} />
						<Label>{feat}</Label>
					</Block>
				)}
			</Wrapper>
		</Container>
	)
}

export default Features
