import React, { useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import {
	ButtonTouchable,
	SelectedContainer,
	ToggleContainer,
	ToggleText
} from './styledComponents'

const width = Dimensions.get('window').width

export default ({ onChangeToggle, defaultAs }) => {
    
	const toggleAnimation = useRef(new Animated.Value(0)).current
	const [selected, select] = useState(defaultAs)

	const selectProperties = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: 0,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		select('Properties')
		onChangeToggle('Properties')
	}

	const selectReviews = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: (width - 38) / 2,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		select('Reviews')
		onChangeToggle('Reviews')
	}

	return(
		<ToggleContainer>
			<Animated.View style={{
				position: 'absolute',
				height: 42,
				width: '100%',
				transform: [{
					translateX: toggleAnimation
				}]
			}}>
				<SelectedContainer/>
			</Animated.View>
			<ButtonTouchable onPress={selectProperties} disabled={selected === 'Properties'}>
				<ToggleText selected={selected === 'Properties'}>Properties</ToggleText>
			</ButtonTouchable>
			<ButtonTouchable onPress={selectReviews} disabled={selected === 'Reviews'}>
				<ToggleText selected={selected === 'Reviews'}>Reviews</ToggleText>
			</ButtonTouchable>
		</ToggleContainer>
	)
}