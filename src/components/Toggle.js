import React, { useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import {
	ButtonTouchable,
	Label,
	SelectedContainer,
	ToggleContainer,
	ToggleText
} from './styledComponents'

const width = Dimensions.get('window').width

export default ({ label, values, onChangeValue }) => {
    
	const toggleAnimation = useRef(new Animated.Value(0)).current
	const [selected, select] = useState(values[0])

	const select1 = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: 0,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		select(values[0])
		onChangeValue(selected)
	}

	const select2 = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: (width - 40) / 2,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		select(values[1])
		onChangeValue(selected)
	}

	return(
		<>
			{ label && (
				<Label style={{ marginBottom: 5 }}>{label}</Label>
			) }
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
				<ButtonTouchable onPress={select1}>
					<ToggleText selected={selected === values[0]}>{values[0]}</ToggleText>
				</ButtonTouchable>
				<ButtonTouchable onPress={select2}>
					<ToggleText selected={selected === values[1]}>{values[1]}</ToggleText>
				</ButtonTouchable>
			</ToggleContainer>
		</>
	)
}