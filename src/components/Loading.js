import React from 'react'
import { ActivityIndicator } from 'react-native'
import {
	LoadingOverlay,
} from './styledComponents'

export default () => {
	return(
		<LoadingOverlay>
			<ActivityIndicator color='#EC7050' size='large' />
		</LoadingOverlay>
	)
}