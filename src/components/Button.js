import React from 'react'
import {
	Button,
	ButtonText
} from './styledComponents'

export default ({ text, width, onPress }) => {
	return(
		<Button width={width} onPress={onPress}>
			<ButtonText>{text}</ButtonText>
		</Button>
	)
}