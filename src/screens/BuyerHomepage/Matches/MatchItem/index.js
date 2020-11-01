import React, { useRef } from 'react'
import { get } from 'lodash'
import Menu, { MenuItem } from 'react-native-material-menu'
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
	Verified
} from './styledComponents'
import images from '../../images'

export default ({ navigation, item }) => {

	const menuRef = useRef(null)

	const hideMenu = () => {
		menuRef.current.hide()
	}

	const openMenu = () => {
		menuRef.current.show()
	}


	return(
		<CardContainer onPress={() => navigation.navigate('PropertyProfile', {
			...item
		})}>
			<CardAbsoluteHeader>
				<LikesWrapper>
					<HeartIcon source={images.heart_empty} />
					<LikeLabel>0 Likes</LikeLabel>
				</LikesWrapper>
				<Menu
					ref={menuRef}
					button={
						<OptionButton onPress={() => openMenu()}>
							<OptionIcon source={images.menu} />
						</OptionButton>
					}
				>
					<MenuItem onPress={hideMenu}>Share</MenuItem>
					<MenuItem onPress={hideMenu}>Dislike</MenuItem>
				</Menu>
			</CardAbsoluteHeader>
			<CardImageContainer>
				<PriceWrapper>
					<PriceLabel>P{formatMoney(item.price, 0)}</PriceLabel>
				</PriceWrapper>
				<CardImage source={{ uri: get(item, 'images[0].image_url', undefined) }} />
			</CardImageContainer>
			<CardContent>
				<CardHeader>
					<CardHeaderLabel>{item.name}</CardHeaderLabel>
					{item.status === 'approved' && (
						<Verified source={images.verified} />
					)}
				</CardHeader>
				<AddressWrapper>
					<AddressIcon source={images.pin_location} />
					<AddressLabel>{item.address}</AddressLabel>
				</AddressWrapper>
				<AdditionalInfo>
					<CardInfo>
						<CardInfoIcon source={images.area} />
						<CardInfoLabel>
							{item.floor_area} sqm
						</CardInfoLabel>
					</CardInfo>
					<CardInfo>
						<CardInfoIcon source={images.bed} />
						<CardInfoLabel>
							{item.bedroom_count} bedrooms
						</CardInfoLabel>
					</CardInfo>
					<CardInfo>
						<CardInfoIcon source={images.bath} />
						<CardInfoLabel>
							{item.toilet_bath_count} t&b
						</CardInfoLabel>
					</CardInfo>
					{ item.garage > 0 && (
						<CardInfo>
							<CardInfoIcon source={images.garage} />
							<CardInfoLabel>
								{item.garage} garage
							</CardInfoLabel>
						</CardInfo>
					)}
				</AdditionalInfo>
			</CardContent>
		</CardContainer> 
	)
}