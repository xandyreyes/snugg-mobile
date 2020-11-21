import React from 'react'
import { Alert } from 'react-native'
import { dislikeAPI, likeAPI } from 'src/api/listing'
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

const Actions = ({ id, onDislike, onLike }) => {

	const closeButtonOnPress = async () => {
		try {
			const dislike = await dislikeAPI(id)
			if (dislike) {
				onDislike()
			}
		} catch (err) {
			console.log(err, '[ERR DISLIKE]')
			Alert.alert(
				'Failed to Like',
				'You can\'t do this feature right now.',
				[
					{ text: 'OK' }
				]
			)
		}
	}

	const chatButtonOnPress = () => {

	}

	const heartButtonOnPress = async () => {
		try {
			const like = await likeAPI(id)
			if (like) {
				onLike()
			}
		} catch (err) {
			console.log(err, '[ERR LIKE]')
			Alert.alert(
				'Failed to Like',
				'You can\'t do this feature right now.',
				[
					{ text: 'OK' }
				]
			)
		}
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
