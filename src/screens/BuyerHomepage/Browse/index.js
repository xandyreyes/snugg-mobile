import React, { useEffect, useRef, useState } from 'react'
import { get } from 'lodash'
import { ActivityIndicator, Alert, Animated, Dimensions } from 'react-native'
import { sendFCM } from 'src/api/fcm'
import { homepageAPI } from 'src/api/homepage'
import { dislikeAPI, likeAPI } from 'src/api/listing'
import { Store } from 'src/store'
import Card from './Card'
import {
	ButtonContainer,
	Container,
	HeartEmpty,
	Image,
	Like,
	NoMoreCardText,
	NoMoreCards,
	Reject,
	Row
} from './styledComponents'
import images from '../images'

const SCREEN_WIDTH = Dimensions.get('screen').width

export default ({ location, navigation }) => {

	const pan = useRef(new Animated.ValueXY())
	const [stack, setStack] = useState([])

	useEffect(() => {
		retrieveData()
	}, [])

	const retrieveData = async () => {
		try {
			const homepageData = await homepageAPI({ 
				lat: location.latitude,
				lon: location.longitude
			})
			setStack(get(homepageData, 'data', []))
		} catch (err) {
			console.log(err, '[ERR RETRIEVE HOMEPAGE DATA]')
		}
	}

	const shiftArray = () => {
		stack.shift()
		setStack([...stack])
	}

	const onLike = async () => {
		Animated.spring(pan.current, {
			toValue: { x: SCREEN_WIDTH + 100, y: 0 },
			useNativeDriver: true
		}).start(() => {
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
		try {
			const like = await likeAPI(stack[0].id)
			const { name, user } = stack[0]
			if (name && user) {
				const body = {
					to: user.device_id,
					notification: {
						body: `${Store.User.data.firstname || 'Someone'} liked ${name}!`,
						title: 'You have a new match!'
					},
					data: {
						type: 'brokerMatch',
						user: Store.User.data
					},
					priority: 'high'
				}
				sendFCM(body)
			}
			if (like) {
				setTimeout(() => {
					navigation.navigate('Match', {
						listing: stack[0],
						user
					})
				}, 500)
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

	const onDisLike = () => {
		Animated.spring(pan.current, {
			toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
			useNativeDriver: true
		}).start(() => {
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
		try {
			dislikeAPI(stack[0].id)
		}  catch (err) {
			console.log(err, '[ERR DISLIKE]')
			Alert.alert(
				'Failed to Dislike',
				'You can\'t do this feature right now.',
				[
					{ text: 'OK' }
				]
			)
		}
	}

	// TODO: When empty array na, show no more cards

	return(
		<Container>
			<NoMoreCards>
				<NoMoreCardText>Searching for Nearby Properties...</NoMoreCardText>
				<ActivityIndicator color='#EC7050' size='large' />
			</NoMoreCards>
			<Card pan={pan} stack={stack} next={shiftArray} navigation={navigation} location={location} />
			<Row>
				<ButtonContainer>
					<Reject onPress={onDisLike}>
						<Image source={images.close} />
					</Reject>
				</ButtonContainer>
				<ButtonContainer >
					<Like onPress={onLike}>
						<HeartEmpty source={images.heart_empty} />
					</Like>
				</ButtonContainer>
			</Row>
		</Container>
	)
}