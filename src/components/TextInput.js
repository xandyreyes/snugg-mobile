import React from 'react'
import {
	Label,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default ({ label, onChangeText, value }) => {
	return(
		<TextInputContainer>
			<Label>{label}</Label>
			<TextInput value={value} onChangeText={onChangeText} />
		</TextInputContainer>
	)
}