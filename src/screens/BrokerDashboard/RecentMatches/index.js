import React from 'react'
import Button from 'src/components/Button'
import {
	Container,
	Header,
	Image,
	ImagesContainer,
	Text
} from './styledComponents'

const images = [
	{
		imageUrl: 'https://assets.teenvogue.com/photos/5f2808c9377e7282120f40fa/16:9/w_2560%2Cc_limit/GettyImages-1177270429.jpg'
	},
	{
		imageUrl: 'https://data.whicdn.com/images/332643176/original.jpg'
	},
	{
		imageUrl: 'https://i.redd.it/vr8nqtf538221.jpg'
	}
]

export default () => {
	return(
		<Container>
			<Header>
                3 people recently liked your property!
			</Header>
			<Text>Lorem ipsum dolor isit amet</Text>
			<ImagesContainer>
				{ images.map((url, index) => <Image key={`image-${index}`}  source={{ uri: url.imageUrl }}/>)}
			</ImagesContainer>
			<Button text={'START CHATTING'} width={160}/>
		</Container>
	)
}