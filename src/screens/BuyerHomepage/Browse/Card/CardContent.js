import React from 'react'
import PropertyInfoBadge from 'src/components/PropertyInfoBadge'
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
	Verified
} from './styledComponents'
import images from '../../images'

export default ({ index }) => {
	return(
		<Container index={index}>
			<Image>
				<PriceContainer>
					<PriceText>P12,000,000.00</PriceText>
				</PriceContainer>
			</Image>
			<InfoContainer>
				<Row>
					<Title numberOfLines={1}>Lorem Ipsum</Title>
					<Verified source={images.verified} />
				</Row>
				<Description numberOfLines={3}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat ex, convallis ac euismod vitae, iaculis ac justo.
				</Description>
				<RowWrap>
					<PropertyInfoBadge value={'2 Beds'} label="bedroom" />
					<PropertyInfoBadge value={'2 Baths'} label="baths" />
					<PropertyInfoBadge value={'2 Floors'} label="floor_area" />
				</RowWrap>
				<Row>
					<LocationIcon source={images.pin_location} />
					<LocationText>2km away</LocationText>
				</Row>
			</InfoContainer>
		</Container>
	)
}