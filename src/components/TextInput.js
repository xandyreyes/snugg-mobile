import React from 'react'
import {
	Label,
	TextInput,
	TextInputContainer
} from './styledComponents'

export default ({ label, onChangeText, value, secureTextEntry, placeholder, multiline, number }) => {
	return(
		<TextInputContainer>
			{ label ? <Label>{label}</Label> : null }
			<TextInput value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} keyboardType={number ? 'decimal-pad' : 'default'} placeholder={placeholder} multiline={multiline} numberOfLines={multiline ? 3 : undefined} />
		</TextInputContainer>
	)
}