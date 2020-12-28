import React, { useEffect, useState } from 'react'
import { Store } from 'src/store'
import { get, size, sortBy } from 'lodash'
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
import {
	getLikedListingAPI,
	getMessagesAPI,
	getPropertyCountAPI,
	getMostLikedPropertiesAPI
} from '../../api/listing';

export default ({ navigation }) => {
	const [propertiesCount, setPropertiesCount] = useState(0)
	const [matchesCount, setMatchesCount] = useState(0)
	const [unreadMessages, setUnreadMessages] = useState([])
	const [mostLikedListings, setMostLikedListings] = useState([])

	useEffect(()=>{
		getRecentLikes()
		getPropertyCount()
		getUnreadMessages()
		getMostLikedProperties()
	},[])
	
	const getRecentLikes = async () => {
		try{
			const listings = await getLikedListingAPI()
			const totalLikedListings = size(get(listings,'data',[]))
			let recentLikedListings = get(listings,'data',[])
			setMatchesCount(totalLikedListings)
			// const recentLikedUsers = recentLikedListings.map(listings=>{
			// 	return listings.user
			// });
			// recentLikedListings =  sortBy(recentLikedListings, function(dateObj) {
			// 	return new Date(dateObj.date);
			// });
		} catch(e){
			console.log('GET RECENT LIKED PROPERTIES ERROR',e)
		}
		
	}
	const getPropertyCount = async () => {
		try{
			const brokerId = get(Store.User,'data.id',0)
			if( brokerId > 0 ){
				const propertyCount = await getPropertyCountAPI(brokerId)
				setPropertiesCount(size(propertyCount.data))
			}
		} catch(e){
			console.log('GET PROPERTY COUNT ERROR',e)
		}
	}

	const getUnreadMessages = async () => {
		try{
			const brokerId = get(Store.User,'data.id',0)
			const data = await getMessagesAPI()
			const messages = get(data,'data',[])
			const unread = messages.filter(message=>message.seen===0 && message.to.id === brokerId)
			setUnreadMessages(unread)
		} catch(e){
			console.log('GET UNREAD MESSAGES ERROR',e)
		}
	}

	const getMostLikedProperties = async () => {
		try{
		const listings = await getMostLikedPropertiesAPI()
		const mostLikedListings = get(listings,'data',[])
		setMostLikedListings(mostLikedListings.slice(0,3))
		} catch(e){
			console.log('GET MOST LIKED PROPERTIES ERROR',e)
		}
	}
	return(
		<Container>
			<AddListingFloatingContainer>
				<AddListingButton onPress={() => navigation.navigate('AddListing')}>
					<AddIcon source={images.add} />
				</AddListingButton>
			</AddListingFloatingContainer>
			<ContentContainer>
				<RecentMatches />
				<Tally properties={propertiesCount} matches={matchesCount} />
				<UnreadMessages messages={unreadMessages}/>
				<MostPopularProperties listings={mostLikedListings} navigation={navigation}/>
			</ContentContainer>
		</Container>
	)
}