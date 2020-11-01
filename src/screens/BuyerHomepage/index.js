import React, { useState } from 'react'
import Browse from './Browse'
import images from './images'
import Matches from './Matches'
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
	const [selected, setSelected] = useState('Nearby')

	return(
		<Container>
			<RowSpace>
				<Header>{selected}</Header>
				<Toggle selectMatches={() => setSelected('Matches')} selectNearby={() => setSelected('Nearby')} />
			</RowSpace>
			{ selected === 'Nearby' ? (
				<>
					<SearchBar onPress={() => navigation.navigate('SelectLocationMap', {
						title: 'Change Location',
						onNext: (nav, location) => {
							nav.goBack()
							setLocation(location)
						}
					})}>
						<LocationIcon source={images.location_icon} />
						<SearchText numberOfLines={1}>{location?.address || 'Search Location'}</SearchText>
					</SearchBar>
					{ location ? (
						<Browse />
					) : (
						<NoLocation />
					) }
				</>
			) : (
				<Matches navigation={navigation} />
			) }
		</Container>
	)
}