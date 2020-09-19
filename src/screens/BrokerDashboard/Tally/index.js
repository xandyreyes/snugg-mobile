import React from 'react'
import {
	Container,
	Count,
	Label,
	Row
} from './styledComponents'

export default ({ properties, matches }) => {
	return(
		<Row>
			<Container>
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