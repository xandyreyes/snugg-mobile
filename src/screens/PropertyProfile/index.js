import React from 'react'
import { get } from 'lodash'
import { ScrollView } from 'react-native'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
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

	const onLike = () => {
		navigation.navigate('Match', {
			listing: route.params,
			user: route.params.user
		})
	}

	const onDislike = () => {
		navigation.goBack()
	}

	// TODO: onLike and onDislike functions!

	return(
		<Container>
			<ScrollView>
				<Header navigation={navigation} propertyImages={get(route, 'params.images', [])} price={get(route, 'params.price', '0')} />
				<PropertyInfo info={route.params} />
				<Broker navigation={navigation} broker={route.params.user} listing={route.params} />
				<PropertyDetails data={route.params} />
				<Features data={route.params.features} />
			</ScrollView>
			{ Store.User?.data?.type_id === UserType.buyer ? (
				<Actions listing={route.params} id={route.params.id} onLike={onLike} onDislike={onDislike} />
			) : null }
		</Container>
	)
}