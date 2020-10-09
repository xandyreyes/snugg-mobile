import React from 'react'
import {
	Col,
	Container,
	DetailTable,
	Header,
	Label,
	Row
} from './styledComponents'

const table = [
	{
		label: 'Property ID',
		value: '123456'
	}, {
		label: 'Property Type',
		value: 'Condo'
	}, {
		label: 'Property Status',
		value: 'Sale'
	}, {
		label: 'Bedroom/s',
		value: '2'
	}, {
		label: 'Toilet & Bath',
		value: '2'
	}, {
		label: 'Area Size',
		value: '20 sqm'
	}, {
		label: 'Garage',
		value: '1'
	}
]

const PropertyDetails = () => {
	return (
		<Container>
			<Header>Property Details</Header>
			<DetailTable>
				{table.map((data, index) =>
					<Row key={index} highlight={index % 2}>
						<Col>
							<Label>{data.label}</Label>
						</Col><Col>
							<Label>{data.value}</Label>
						</Col>
					</Row>  
				)}
			</DetailTable>
		</Container>
	)
}

export default PropertyDetails