import React from 'react'
import {
	Label,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default ({ label, onChangeText, value, secureTextEntry, placeholder }) => {
	return(
		<TextInputContainer>
			{ label ? <Label>{label}</Label> : null }
			<TextInput value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} placeholder={placeholder} />
		</TextInputContainer>
	)
}