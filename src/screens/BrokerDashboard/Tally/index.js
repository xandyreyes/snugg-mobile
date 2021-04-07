import React from 'react'
import { get } from 'lodash'
import { Store } from 'src/store'
import {
	Container,
	Count,
	Label,
	Row
} from './styledComponents'

export default ({ properties, matches, navigation }) => {
	return(
		<Row>
			<Container onPress={() => navigation.navigate('BrokerProfile', {
				userId: get(Store.User, 'data.id', null)
			})}>
				<Label>PROPERTIES</Label>
				<Count>{properties}</Count>
			</Container>
			<Container>
				<Label>TOTAL MATCHES</Label>
				<Count>{matches}</Count>
			</Container>
		</Row>
	)
}