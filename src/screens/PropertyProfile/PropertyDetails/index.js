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
	const getListingType = (listingType) => {
		if (listingType === ListingType.condo) {
			return 'Condo'
		}
		if (listingType === ListingType.house_and_lot) {
			return 'House & Lot'
		}
		if (listingType === ListingType.commercial) {
			return 'Commercial'
		}
		if (listingType === ListingType.lot) {
			return 'Lot'
		}
		if (listingType === ListingType.apartment) {
			return 'Apartment'
		}
		if (listingType === ListingType.foreclosure) {
			return 'Foreclosure'
		}
		return ''
	}

	const table = [
		{
			label: 'Property ID',
			value: data.id
		}, {
			label: 'Property Type',
			value: getListingType(data.listing_type)
		}, {
			label: 'Property Status',
			value: data.offer_type === OfferType.sale ? 'Sale' : 'Rent'
		}, {
			label: 'Bedroom/s',
			value: data.bedroom
		}, {
			label: 'Toilet & Bath',
			value: data.baths
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