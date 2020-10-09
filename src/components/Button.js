import React from 'react'
import {
	Button,
	ButtonText,
  ButtonLoading
} from './styledComponents'
import {
  ActivityIndicator
} from 'react-native'

export default ({ text, width, onPress, disabled = false }) => {
	return(
		<Button activeOpacity={disabled ? 1 : 0.7} width={width} onPress={onPress}>
			<ButtonText disabled={disabled}>{text}</ButtonText>
      {disabled && (
        <ButtonLoading>
          <ActivityIndicator color="#fff" />
        </ButtonLoading>
      )}
		</Button>
	)
}