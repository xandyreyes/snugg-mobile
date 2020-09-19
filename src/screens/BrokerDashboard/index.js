import React from 'react'
import MostPopularProperties from './MostPopularProperties'
import RecentMatches from './RecentMatches'
import {
	Container,
	ContentContainer
} from './styledComponents'
import Tally from './Tally'
import UnreadMessages from './UnreadMessages'

export default () => {
	return(
		<Container>
			<ContentContainer>
				<RecentMatches />
				<Tally properties={2} matches={17} />
				<UnreadMessages />
				<MostPopularProperties />
			</ContentContainer>
		</Container>
	)
}