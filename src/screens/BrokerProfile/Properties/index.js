import React from 'react'
import images from '../images'
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

const data = [
	{
		image_url: images.property1,
		likes: 10,
		price: '12000000',
		name: 'Lorem Ipsum',
		verified: true,
		location: 'Greenhills, San Juan City',
		info: [
			{
				description: '2 Bed/s'
			}, {
				description: '2 T&B'
			}, {
				description: '70 sqm'
			}, {
				description: '1 Garage'
			}, {
				description: 'Condo'
			}
		]
	}, {
		image_url: images.property2,
		likes: 10,
		price: '12000000',
		name: 'Lorem Ipsum',
		verified: true,
		location: 'Greenhills, San Juan City',
		info: [
			{
				description: '2 Bed/s'
			}, {
				description: '2 T&B'
			}, {
				description: '70 sqm'
			}, {
				description: '1 Garage'
			}, {
				description: 'Condo'
			}
		]
	}
]

const formatMoney = (amount, decimalCount = 2, decimal = '.', thousands = ',') => {
	try {
		decimalCount = Math.abs(decimalCount)
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount
		const negativeSign = amount < 0 ? '-' : ''
		let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
		let j = (i.length > 3) ? i.length % 3 : 0
		return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')
	} catch (e) {
		console.log(e)
	}
}

const Properties = ({ propertyOptionOnPress }) => {
	return data.map((d, index) => 
		<CardContainer key={index} first={index === 0}>
			<CardAbsoluteHeader>
				<LikesWrapper>
					<HeartIcon source={images.heart_empty} />
					<LikeLabel>{d.likes} Likes</LikeLabel>
				</LikesWrapper>
				<OptionButton onPress={propertyOptionOnPress(d)}>
					<OptionIcon />
				</OptionButton>
			</CardAbsoluteHeader>
			<CardImageContainer>
				<PriceWrapper>
					<PriceLabel>P{formatMoney(d.price, 0)}</PriceLabel>
				</PriceWrapper>
				<CardImage source={d.image_url} />
			</CardImageContainer>
			<CardContent>
				<CardHeader>
					<CardHeaderLabel>{d.name}</CardHeaderLabel>
					{d.verified && (
						<Verified source={images.verified} />
					)}
				</CardHeader>
				<AddressWrapper>
					<AddressIcon source={images.pin_location} />
					<AddressLabel>{d.location}</AddressLabel>
				</AddressWrapper>
				<AdditionalInfo>
					{d.info.map((i, idx) =>
						<CardInfo key={idx}>
							<CardInfoIcon source={images.bath} />
							<CardInfoLabel>
								{i.description}
							</CardInfoLabel>
						</CardInfo>
					)}
				</AdditionalInfo>
			</CardContent>
		</CardContainer>  
	)
}

export default Properties
