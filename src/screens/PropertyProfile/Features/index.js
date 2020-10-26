import React, { useEffect, useState } from 'react'
import {
	Block,
	CheckIcon,
	Container,
	Header,
	Label,
	Wrapper
} from './styledComponents'
import images from '../images'

const Features = ({ data }) => {

	const [features, setFeatures] = useState([])

	useEffect(() => {
		setFeatures(data.split(','))
	}, [])

	return (
		<Container>
			<Header>Features</Header>
			<Wrapper>
				{features.map((feat, index) =>
					<Block key={index}>
						<CheckIcon source={images.check} />
						<Label>{`${feat}`}</Label>
					</Block>
				)}
			</Wrapper>
		</Container>
	)
}

export default Features
