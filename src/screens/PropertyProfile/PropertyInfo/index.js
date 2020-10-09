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

export default () => {

	const [expandDescription, setExpandDescription] = useState(false)

	return(
		<Container>
			<NameContainer>
				<Name>Lalalalisa Manoban</Name>
				<Verified source={images.verified} />
			</NameContainer>
			<NameContainer>
				<PinIcon source={images.pin_location} />
				<Location>Greenhills, San Juan City</Location>
			</NameContainer>
			<NameContainer>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
				<PropertyInfoBadge label="bedroom" value="2 Bed/s"/>
			</NameContainer>
			<DescriptionContainer>
				<DescriptionText numberOfLines={expandDescription ? undefined : 5}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at hendrerit lorem. Phasellus velit ante, suscipit sed dapibus vel, maximus pulvinar risus. Donec tristique, eros ut gravida ullamcorper, leo sem lobortis nisi, non tincidunt nibh nibh eu diam. Nunc id eros mi. Maecenas in feugiat turpis. Vestibulum placerat tempus orci consequat gravida.
				</DescriptionText>
				{ expandDescription ? (
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
				) }
			</DescriptionContainer>
		</Container>
	)
}