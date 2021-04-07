import React from 'react'
import {
	Button,
	ButtonLoading,
	ButtonText
} from './styledComponents'
import {
	ActivityIndicator
} from 'react-native'

export default ({ text, width, onPress, disabled = false, inverse = false }) => {
	return(
		<Button activeOpacity={disabled ? 1 : 0.7} width={width} onPress={onPress} inverse={inverse}>
			<ButtonText disabled={disabled} inverse={inverse}>{text}</ButtonText>
			{disabled && (
				<ButtonLoading>
					<ActivityIndicator color={inverse?"#17365d":"#fff"} />
				</ButtonLoading>
			)}
		</Button>
	)
}