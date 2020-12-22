import React from 'react'
import { Alert } from 'react-native'
import { sendFCM } from 'src/api/fcm'
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

const Actions = ({ listing, id, onDislike, onLike }) => {

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
			const { name, user } = listing
			if (name && user) {
				const body = {
					to: user.device_id,
					notification: {
						body: `${user.firstname} liked ${name}!`,
						title: 'You have a new match!'
					},
					data: {
						listing
					},
					priority: 'high'
				}
				sendFCM(body)
			}
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
