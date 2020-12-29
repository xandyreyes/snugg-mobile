import React, { useState } from 'react'
import PropertyInfoBadge from 'src/components/PropertyInfoBadge'
import {
	Container,
	DescriptionContainer,
	DescriptionText,
	Location,
	Name,
	NameContainer,
	PinIcon,
	ReadLessContainer,
	ReadMoreButton,
	ReadMoreGradient,
	ReadMoreText,
	ReadMoreTouchable,
	Verified
} from './styledComponents'
import images from '../images'

export default ({ info }) => {

	const [expandDescription, setExpandDescription] = useState(false)

	return(
		<Container>
			<NameContainer>
				<Name>{info.name}</Name>
				<Verified source={images.verified} />
			</NameContainer>
			<NameContainer>
				<PinIcon source={images.pin_location} />
				<Location numberOfLines={1}>{info.address}</Location>
			</NameContainer>
			<NameContainer>
			  { info.listing_type ? (<PropertyInfoBadge label="listing_type" value={info.listing_type.id}/>) : null }
				<PropertyInfoBadge label="offer_type" value={info.offer_type.id}/>
				<PropertyInfoBadge label="floor_count" value={info.floor_count}/>
				<PropertyInfoBadge label="bedroom" value={info.bedroom_count}/>
				<PropertyInfoBadge label="baths" value={info.toilet_bath_count}/>
				<PropertyInfoBadge label="floor_area" value={info.floor_area}/>
				{ info.garage ? (<PropertyInfoBadge label="garage" value={info.garage}/>) : null }
				
			</NameContainer>
			<DescriptionContainer>
				<DescriptionText numberOfLines={expandDescription && info.special_notes.length > 300 ? undefined : 5}>
					{info.special_notes}
				</DescriptionText>
				{ info.special_notes.length > 300 && (expandDescription ? (
					<ReadLessContainer>
						<ReadMoreButton>
							<ReadMoreTouchable onPress={() => setExpandDescription(false)}>
								<ReadMoreText>Show Less</ReadMoreText>
							</ReadMoreTouchable>
						</ReadMoreButton>
					</ReadLessContainer>
				) : (
					<ReadMoreGradient colors={['rgba(255,255,255,0)', '#ffffff']}>
						<ReadMoreButton>
							<ReadMoreTouchable onPress={() => setExpandDescription(true)}>
								<ReadMoreText>Show More</ReadMoreText>
							</ReadMoreTouchable>
						</ReadMoreButton>
					</ReadMoreGradient>
				)) }
			</DescriptionContainer>
		</Container>
	)
}