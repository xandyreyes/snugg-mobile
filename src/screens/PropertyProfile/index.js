import React from 'react'
import { get } from 'lodash'
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

export default ({ navigation, route }) => {
	return(
		<Container>
			<ScrollView>
				<Header navigation={navigation} propertyImages={get(route, 'params.images', [])} price={get(route, 'params.price', '0')} />
				<PropertyInfo info={route.params} />
				<Broker navigation={navigation} broker={route.params.user} />
				<PropertyDetails data={route.params} />
				<Features data={route.params.features} />
			</ScrollView>
			<Actions />
		</Container>
	)
}