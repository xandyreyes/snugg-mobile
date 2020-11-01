import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
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

export default ({ navigation, route }) => {

	const [location, setLocation] = useState(null)
	const [selected, setSelected] = useState('Nearby')

	useEffect(() => {
		if (get(route, 'params.view', '') === 'Matches') {
			setSelected('Matches')
		}
	}, [route.params])

	return(
		<Container>
			<RowSpace>
				<Header>{selected}</Header>
				<Toggle selectedView={selected} selectMatches={() => setSelected('Matches')} selectNearby={() => setSelected('Nearby')} />
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