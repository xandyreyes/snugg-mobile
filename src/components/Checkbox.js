import React from 'react'
import {
	CheckboxContainer,
	CheckboxTouchable,
	CheckedView,
	Label
} from './styledComponents'

const check = require('src/assets/images/check.png')

export default ({ checked, label, onPress }) => {
	return(
		<CheckboxContainer onPress={onPress}>
			<CheckboxTouchable>
				{ checked && (<CheckedView source={check} />) }
			</CheckboxTouchable>
			{ label && (<Label>{label}</Label>) }
		</CheckboxContainer>
	)
}