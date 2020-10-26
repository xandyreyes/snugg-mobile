import React from 'react'
import { ListingType, OfferType } from 'src/constants'
import {
	Col,
	Container,
	DetailTable,
	Header,
	Label,
	Row
} from './styledComponents'

const PropertyDetails = ({ data }) => {
	const table = [
		{
			label: 'Property ID',
			value: data.id
		}, {
			label: 'Property Type',
			value: data.listing_type === ListingType.condo ? 'Condo' : 'House & Lot'
		}, {
			label: 'Property Status',
			value: data.offer_type === OfferType.sale ? 'Sale' : 'Rent'
		}, {
			label: 'Bedroom/s',
			value: data.bedroom_count
		}, {
			label: 'Toilet & Bath',
			value: data.toilet_bath_count
		}, {
			label: 'Area Size',
			value: data.floor_area ? `${data.floor_area} sqm` : null
		}, {
			label: 'Lot Area',
			value: data.lot_area ? `${data.lot_area} sqm` : null
		}, {
			label: 'Garage',
			value: data.garage
		}, {
			label: 'Floor Count',
			value: data.floor_count
		}
	]

	return (
		<Container>
			<Header>Property Details</Header>
			<DetailTable>
				{table.map((data, index) => {
					if (data.value) {
						return (
							<Row key={index} highlight={index % 2}>
								<Col>
									<Label>{data.label}</Label>
								</Col><Col>
									<Label>{data.value}</Label>
								</Col>
							</Row>  
						)
					}
					return null
				})}
			</DetailTable>
		</Container>
	)
}

export default PropertyDetails