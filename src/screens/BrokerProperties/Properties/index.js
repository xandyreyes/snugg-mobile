import React from 'react'
import {Alert} from 'react-native'
import images from './images'
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
	CardInfo,
	CardInfoIcon,
	CardInfoLabel,
	HeartIcon,
	LikeLabel,
	LikesWrapper,
	OptionButton,
	OptionIcon,
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

const Properties = () => {
	return data.map((d, index) => 
		<CardContainer key={index} first={index === 0}>
			<CardAbsoluteHeader>
				<LikesWrapper>
					<HeartIcon />
					<LikeLabel>{d.likes} Likes</LikeLabel>
				</LikesWrapper>

				<OptionButton onPress={() => Alert.alert('Options', 'Feature coming soon')}>
					<OptionIcon />
				</OptionButton>
			</CardAbsoluteHeader>

			<CardImage source={d.image_url} />

			<CardContent>
				<CardHeader>
					<CardHeaderLabel>{d.name}</CardHeaderLabel>
					{d.verified && (
						<Verified />
					)}
				</CardHeader>
        
				<AddressWrapper>
					<AddressIcon source={images.pin_location} />
					<AddressLabel>{d.location}</AddressLabel>
				</AddressWrapper>

				<AdditionalInfo>
					{d.info.map((i, idx) =>
						<CardInfo key={idx}>
							<CardInfoIcon />
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
