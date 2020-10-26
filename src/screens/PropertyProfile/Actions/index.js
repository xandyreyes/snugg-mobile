import React from 'react'
import {
	ChatButton,
	ChatIcon,
	CloseButton,
	CloseIcon,
	HeartButton,
	HeartIcon,
	Wrapper
} from './styledComponents'
import images from '../images'

const Actions = () => {

	const closeButtonOnPress = () => {

	}

	const chatButtonOnPress = () => {

	}

	const heartButtonOnPress = () => {

	}

	return (
		<Wrapper>
			<CloseButton onPress={closeButtonOnPress}>
				<CloseIcon source={images.close} />
			</CloseButton>
			<ChatButton onPress={chatButtonOnPress}>
				<ChatIcon source={images.chat} />
			</ChatButton>
			<HeartButton onPress={heartButtonOnPress}>
				<HeartIcon source={images.heart} />
			</HeartButton>
		</Wrapper>
	)
}

export default Actions
