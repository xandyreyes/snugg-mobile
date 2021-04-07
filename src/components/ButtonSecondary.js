import React from 'react'
import {
	ButtonSecondary,
	ButtonTextSecondary
} from './styledComponents'

export default ({ text, width }) => {
	return(
		<ButtonSecondary width={width}>
			<ButtonTextSecondary>{text}</ButtonTextSecondary>
		</ButtonSecondary>
	)
}