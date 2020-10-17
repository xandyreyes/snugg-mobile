import React, { useMemo, useRef } from 'react'
import { Animated, Dimensions, PanResponder } from 'react-native'
import CardContent from './CardContent'
import SwipeLabel from './SwipeLabel'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const SCREEN_WIDTH = Dimensions.get('screen').width

export default (props) => {

	const pan = useRef(new Animated.ValueXY())

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
				}).start(() => {
					props.next()
					pan.current.setValue({ x: 0, y: 0 })
				})
			} else if (gestureState.dx < -140) {
				Animated.spring(pan.current, {
					toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
					useNativeDriver: true
				}).start(() => {
					props.next()
					pan.current.setValue({ x: 0, y: 0 })
				})
			} else {
				Animated.spring(pan.current, {
					toValue: { x: 0, y: 0 },
					friction: 5,
					useNativeDriver: true
				}).start()
			}
		}
	}), [])

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

	return props.stack.map((item, index) => {
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
					<CardContent {...props} />
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
				<CardContent {...props} />
			</Animated.View>
		)
	}).reverse()	
}