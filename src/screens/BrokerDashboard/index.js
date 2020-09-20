import React from 'react'
import images from './images'
import MostPopularProperties from './MostPopularProperties'
import RecentMatches from './RecentMatches'
import {
	AddIcon,
	AddListingButton,
	AddListingFloatingContainer,
	Container,
	ContentContainer
} from './styledComponents'
import Tally from './Tally'
import UnreadMessages from './UnreadMessages'

export default ({ navigation }) => {
	return(
		<Container>
			<AddListingFloatingContainer>
				<AddListingButton onPress={() => navigation.navigate('AddListing')}>
					<AddIcon source={images.add} />
				</AddListingButton>
			</AddListingFloatingContainer>
			<ContentContainer>
				<RecentMatches />
				<Tally properties={2} matches={17} />
				<UnreadMessages />
				<MostPopularProperties />
			</ContentContainer>
		</Container>
	)
}