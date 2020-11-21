import React from 'react'
import { Animated } from 'react-native'
import {
	SwipeLabelImage,
	SwipeLabelImageLike,
	SwipeLabelText,
} from './styledComponents'
import images from '../../images'

export default ({ like, opacity }) => {

	if (like) {
		return(
			<Animated.View
				style={{
					opacity,
					position: 'absolute',
					top: 50,
					left: 60,
					zIndex: 1000,
					alignItems: 'center'
				}}
			>
				<SwipeLabelImageLike source={images.heart_empty}/>
				<SwipeLabelText like={true}>LIKE</SwipeLabelText>
			</Animated.View>
		)
	}

	return(
		<Animated.View
			style={{
				opacity,
				position: 'absolute',
				top: 50,
				right: 60,
				zIndex: 1000,
				alignItems: 'center'
			}}
		>
			<SwipeLabelImage source={images.close}/>
			<SwipeLabelText>NOPE</SwipeLabelText>
		</Animated.View>
	)

	
}