import React from 'react'
import {
	AddressIcon,
	AddressLabel,
	CardInfo,
	CardInfoIcon,
	CardInfoLabel,
	ListingAdditionalInfo,
	ListingAddressWrapper,
	ListingImage,
	ListingInfoWrapper,
	ListingName,
	ListingPrice,
	ListingWrapper
} from './styledComponents'
import formatMoney from 'src/utils/formatMoney'
import images from './images'

const ListingInfo = ({ data }) => {
	return (
		<ListingWrapper>
			<ListingImage source={{ uri: data.images[0].image_url}} />
			<ListingInfoWrapper>
				<ListingName>{data.name}</ListingName>
				<ListingAddressWrapper>
					<AddressIcon source={images.pin_location} />
					<AddressLabel>{data.address}</AddressLabel>
				</ListingAddressWrapper>
				<ListingAdditionalInfo>
					{data.bedroom > 0 ? (
						<CardInfo>
							<CardInfoIcon source={images.bed} />
							<CardInfoLabel>
								{data.bedroom} Bedrooom/s
							</CardInfoLabel>
						</CardInfo>
					) : null}
					{data.baths > 0 ? (
						<CardInfo>
							<CardInfoIcon source={images.bath} />
							<CardInfoLabel>
								{data.baths} T&B
							</CardInfoLabel>
						</CardInfo>
					) : null}
					{data.floor_area > 0 ? (
						<CardInfo>
							<CardInfoIcon source={images.area} />
							<CardInfoLabel>
								{data.floor_area} sqm
							</CardInfoLabel>
						</CardInfo>
					) : null}
				</ListingAdditionalInfo>
				<ListingPrice>{formatMoney(data.price, 0)}</ListingPrice>
			</ListingInfoWrapper>
		</ListingWrapper>
	)
}

export default ListingInfo
