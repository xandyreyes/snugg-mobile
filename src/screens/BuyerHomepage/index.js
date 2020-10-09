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

	useEffect(() => {

	}, [])

	return(
		<Container>
			<RowSpace>
				<Header>Nearby</Header>
				<Toggle />
			</RowSpace>
			{ location ? (
				<Browse />
			) : (
				<>
					<SearchBar onPress={() => navigation.navigate('SelectLocationMap', {
						title: 'Change Location',
						onNext: (nav, location) => {
							nav.goBack()
							setLocation(location)
						}
					})}>
						<LocationIcon source={images.location_icon} />
						<SearchText>Search Location</SearchText>
					</SearchBar>
					<NoLocation />
				</>
			) }
		</Container>
	)
}