import React, { useEffect, useMemo, useRef, useState } from 'react'
import { get, uniqBy } from 'lodash'
import { ActivityIndicator, Alert, Animated, Dimensions, PanResponder } from 'react-native'
import { sendFCM } from 'src/api/fcm'
import { homepageAPI } from 'src/api/homepage'
import { dislikeAPI, getLikedListingAPI, likeAPI } from 'src/api/listing'
import { Store } from 'src/store'
import CardContent from './Card/CardContent'
import SwipeLabel from './Card/SwipeLabel'
// import Card from './Card'
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

const SCREEN_HEIGHT = Dimensions.get('screen').height
const SCREEN_WIDTH = Dimensions.get('screen').width

export default ({ location, navigation }) => {

	const pan = useRef(new Animated.ValueXY())
	const [stack, setStack] = useState([])
	// const [currentCard, setCard] = useState()

	useEffect(() => {
		retrieveData()
	}, [])

	const panResponder = useMemo(() => PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt, gestureState) => {
			pan.current.setValue({ x: gestureState.dx, y: gestureState.dy })
		},
		onPanResponderRelease: (evt, gestureState) => {
			if (gestureState.dx > 140) {
				Animated.spring(pan.current, {
					toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
					useNativeDriver: true
				}).start(async () => {
					await likeListingAPI()
					shiftArray()
					pan.current.setValue({ x: 0, y: 0 })
				})
			} else if (gestureState.dx < -140) {
				Animated.spring(pan.current, {
					toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
					useNativeDriver: true
				}).start(async () => {
					await dislikeListingAPI()
					shiftArray()
					pan.current.setValue({ x: 0, y: 0 })
				})
			} else {
				Animated.spring(pan.current, {
					toValue: { x: 0, y: 0 },
					friction: 5,
					useNativeDriver: true
				}).start()
			}
		},
		onMoveShouldSetPanResponder: (evt, gestureState) => {
			return !(gestureState.dx === 0 && gestureState.dy === 0)                  
		}
	}), [stack])

	const rotate = pan.current.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: ['-10deg', '0deg', '10deg'],
		extrapolate: 'clamp'
	})

	const rotateAndTranslate = {
		transform: [
			{ rotate },
			...pan.current.getTranslateTransform()
		]
	}

	const likeOpacity = pan.current.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 5, SCREEN_WIDTH / 2],
		outputRange: [0, 0, 0, 1],
		extrapolate: 'clamp'
	})

	const dislikeOpacity = pan.current.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, -SCREEN_WIDTH / 5, 0, SCREEN_WIDTH / 2],
		outputRange: [1, 0, 0, 0],
		extrapolate: 'clamp'
	})

	const nextCardOpacity = pan.current.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 1.5, 0, SCREEN_WIDTH / 1.5],
		outputRange: [1, 0, 1],
		extrapolate: 'clamp'
	})

	const nextCardScale = pan.current.x.interpolate({
		inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
		outputRange: [1, 0.9, 1],
		extrapolate: 'clamp'
	})

	const nextCard = {
		opacity: nextCardOpacity,
		transform: [{ scale: nextCardScale }],
	}

	const retrieveData = async () => {
		try {
			const homepageData = await homepageAPI({ 
				lat: location.latitude,
				lon: location.longitude
			})
			const liked = await getLikedListingAPI()
			const likedIds = get(liked, 'data', []).map((item) => item.id)
			Store.Listings.setLiked(likedIds)
			const stackCards = get(homepageData, 'data', []).filter((item) => !likedIds.includes(item.id))
			setStack(uniqBy(stackCards, 'id'))
		} catch (err) {
			console.log(err, '[ERR RETRIEVE HOMEPAGE DATA]')
		}
	}

	const shiftArray = () => {
		stack.shift()
		setStack([...stack])
	}

	const onLike = () => {
		Animated.spring(pan.current, {
			toValue: { x: SCREEN_WIDTH + 100, y: 0 },
			useNativeDriver: true
		}).start(async () => {
			await likeListingAPI()
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
	}

	const likeListingAPI = async () => {
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
				Store.Listings.setLiked([...Store.Listings.liked, stack[0].id])
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
		}).start(async () => {
			await dislikeListingAPI()
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
	}

	const dislikeListingAPI = () => {
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
			{/* <Card pan={pan} stack={stack} onLike={onLike} onDislike={onDisLike} next={shiftArray} navigation={navigation} location={location} /> */}
			{stack.map((item, index) => {
				if (index === 0) {
					return(
						<Animated.View
							key={index}
							{...panResponder.panHandlers}
							style={
								[rotateAndTranslate, {
									position: 'absolute',
									flex: 1,
									height: SCREEN_HEIGHT - 360,
								}]
							}
						>
							<SwipeLabel like={true} opacity={likeOpacity} />
							<SwipeLabel like={false} opacity={dislikeOpacity} />
							<CardContent index={index} item={item} navigation={navigation} location={location} />
						</Animated.View>
					)
				}
	
				return(
					<Animated.View
						key={index}
						style={[nextCard, {
							position: 'absolute',
							flex: 1,
							height: SCREEN_HEIGHT - 360
						}]}
					>
						<CardContent index={index} item={item} navigation={navigation} location={location} />
					</Animated.View>
				)
			}).reverse()}
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