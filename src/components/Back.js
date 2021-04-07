import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BackImage } from './styledComponents'

const back = require('src/assets/images/back.png')

export default ({ navigation, color }) => {
	return(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<BackImage  source={back} color={color} />
		</TouchableOpacity>
	)
}