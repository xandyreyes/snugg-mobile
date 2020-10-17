import React, { useEffect, useState } from 'react'
import Browse from './Browse'
import images from './images'
import NoLocation from './NoLocation'
import {
	Container,
	Header,
	LocationIcon,
	RowSpace,
	SearchBar,
	SearchText
} from './styledComponents'
import Toggle from './Toggle'

export default ({ navigation }) => {

	const [location, setLocation] = useState(null)

	console.log({ location })

	return(
		<Container>
			<RowSpace>
				<Header>Nearby</Header>
				<Toggle />
			</RowSpace>
			<SearchBar onPress={() => navigation.navigate('SelectLocationMap', {
				title: 'Change Location',
				onNext: (nav, location) => {
					nav.goBack()
					setLocation(location)
				}
			})}>
				<LocationIcon source={images.location_icon} />
				<SearchText>{location?.address || 'Search Location'}</SearchText>
			</SearchBar>
			{ location ? (
				<Browse />
			) : (
				<NoLocation />
			) }
		</Container>
	)
}