import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { getUserListingAPI } from 'src/api/user'
import formatMoney from 'src/utils/formatMoney'
import {
	AdditionalInfo,
	AddressIcon,
	AddressLabel,
	AddressWrapper,
	CardAbsoluteHeader,
	CardContainer,
	CardContent,
	CardHeader,
	CardHeaderLabel,
	CardImage,
	CardImageContainer,
	CardInfo,
	CardInfoIcon,
	CardInfoLabel,
	HeartIcon,
	LikeLabel,
	LikesWrapper,
	OptionButton,
	OptionIcon,
	PriceLabel,
	PriceWrapper,
} from './styledComponents'
import images from '../images'

// TODO: Other types of card info pls add
// TODO: Property options change to Menu

const Properties = ({ navigation, propertyOptionOnPress, userId }) => {

	const [listings, setListings] = useState([])

	useEffect(() => {
		getListings()
	}, [])

	const getListings = async () => {
		try {
			const listings = await getUserListingAPI(userId)
			console.log('Listings retrieved', listings)
			setListings(listings.data)
		} catch (err) {
			console.log({ err }, '[ERR RETRIEVE LISTING]')
			Alert.alert(
				'Error',
				'Something went wrong',
				[
					{text: 'OK'}
				]
			)
		}
	}

	return listings.map((d, index) => 
		<CardContainer key={index} first={index === 0} onPress={() => navigation.navigate('PropertyProfile', {
			...d
		})}>
			<CardAbsoluteHeader>
				<LikesWrapper>
					<HeartIcon source={images.heart_empty} />
					<LikeLabel>0 Likes</LikeLabel>
				</LikesWrapper>
				<OptionButton onPress={propertyOptionOnPress(d)}>
					<OptionIcon source={images.menu} />
				</OptionButton>
			</CardAbsoluteHeader>
			<CardImageContainer>
				<PriceWrapper>
					<PriceLabel>P{formatMoney(d.price, 0)}</PriceLabel>
				</PriceWrapper>
				<CardImage source={{ uri: d.images[0]?.image_url }} />
			</CardImageContainer>
			<CardContent>
				<CardHeader>
					<CardHeaderLabel>{d.name}</CardHeaderLabel>
					{/* {d.status === 'approved' && (
						<Verified source={images.verified} />
					)} */}
				</CardHeader>
				<AddressWrapper>
					<AddressIcon source={images.pin_location} />
					<AddressLabel>{d.address}</AddressLabel>
				</AddressWrapper>
				<AdditionalInfo>
					<CardInfo>
						<CardInfoIcon source={images.area} />
						<CardInfoLabel>
							{d.floor_area} sqm
						</CardInfoLabel>
					</CardInfo>
					<CardInfo>
						<CardInfoIcon source={images.bed} />
						<CardInfoLabel>
							{d.bedroom} bedrooms
						</CardInfoLabel>
					</CardInfo>
					<CardInfo>
						<CardInfoIcon source={images.bath} />
						<CardInfoLabel>
							{d.baths} t&b
						</CardInfoLabel>
					</CardInfo>
					{ d.garage > 0 && (
						<CardInfo>
							<CardInfoIcon source={images.garage} />
							<CardInfoLabel>
								{d.garage} garage
							</CardInfoLabel>
						</CardInfo>
					)}
				</AdditionalInfo>
			</CardContent>
		</CardContainer>  
	)
}

export default Properties
