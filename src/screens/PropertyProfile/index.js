import React from 'react'
import Header from './Header'
import PropertyInfo from './PropertyInfo'
import {
	Container,
} from './styledComponents'

export default ({ navigation }) => {
	return(
		<Container>
			<Header navigation={navigation} />
			<PropertyInfo />
		</Container>
	)
}