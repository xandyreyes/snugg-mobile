import React, { useEffect, useState } from 'react'
import { getDistance } from 'geolib'
import PropertyInfoBadge from 'src/components/PropertyInfoBadge'
import formatMoney from 'src/utils/formatMoney'
import {
	Container,
	Description,
	Image,
	InfoContainer,
	LocationIcon,
	LocationText,
	PriceContainer,
	PriceText,
	Row,
	RowWrap,
	Title,
	TouchableOpacity,
	Verified
} from './styledComponents'
import images from '../../images'

export default ({ index, item, location, navigation }) => {

	const [dist, setDist] = useState('')

	useEffect(() => {
		if (item.lat) {
			const distanceData = getDistance(
				{
					latitude: item.lat,
					longitude: item.lon
				},
				{
					latitude: location.latitude,
					longitude: location.longitude
				}
			)
			setDist((distanceData * 0.001).toFixed(2))
		}
	}, [item])

	if (item) {
		return(
			<Container index={index}>
				<TouchableOpacity onPress={() => navigation.navigate('PropertyProfile', {
					...item
				})}>
					<Image source={{ uri: item.images[0].image_url}}>
						<PriceContainer>
							<PriceText>P{formatMoney(item.price)}</PriceText>
						</PriceContainer>
					</Image>
				</TouchableOpacity>
				<InfoContainer>
					<Row>
						<Title numberOfLines={1}>{item.name}</Title>
						{ item.status === 'approved' && (
							<Verified source={images.verified} />
						)}
					</Row>
					<Description numberOfLines={3}>
						{item.special_notes}
					</Description>
					<RowWrap>
						<PropertyInfoBadge label="listing_type" value={item.listing_type.id}/>
						<PropertyInfoBadge label="offer_type" value={item.offer_type.id}/>
						<PropertyInfoBadge label="floor_count" value={item.floor_count}/>
						<PropertyInfoBadge label="bedroom" value={item.bedroom}/>
						<PropertyInfoBadge label="baths" value={item.baths}/>
						<PropertyInfoBadge label="floor_area" value={item.floor_area}/>
						{ item.garage ? (<PropertyInfoBadge label="garage" value={item.garage}/>) : null }
					</RowWrap>
					<Row>
						<LocationIcon source={images.pin_location} />
						<LocationText>{dist} km away</LocationText>
					</Row>
				</InfoContainer>
			</Container>
		)
	}

	return null

	
}