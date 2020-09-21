import React from 'react'
import {
	Label,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default ({ label, onChangeText }) => {
	return(
		<TextInputContainer>
			<Label>{label}</Label>
			<TextInput onChangeText={onChangeText} />
		</TextInputContainer>
	)
}