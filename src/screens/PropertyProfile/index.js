import React from 'react'
import { ScrollView } from 'react-native'
import Header from './Header'
import PropertyInfo from './PropertyInfo'
import Broker from './Broker'
import PropertyDetails from './PropertyDetails'
import Features from './Features'
import Actions from './Actions'
import {
	Container,
} from './styledComponents'

export default ({ navigation }) => {
	return(
		<Container>
			<ScrollView>
				<Header navigation={navigation} />
				<PropertyInfo />
				<Broker />
				<PropertyDetails />
				<Features />
			</ScrollView>
			<Actions />
		</Container>
	)
}