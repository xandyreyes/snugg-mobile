import React, { useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'
import { Store } from 'src/store'
import { get, size, uniqBy } from 'lodash'
import images from './images'
import MostPopularProperties from './MostPopularProperties'
import RecentMatches from './RecentMatches'
import {
	AddIcon,
	AddListingButton,
	AddListingFloatingContainer,
	CenterContainer,
	Container,
	ContentContainer,
	Header,
	ImageLarge
} from './styledComponents'
import Tally from './Tally'
import UnreadMessages from './UnreadMessages'
import {
	getLikedListingAPI,
	getMessagesAPI,
	getMostLikedPropertiesAPI,
	getPropertyCountAPI
} from '../../api/listing'

export default ({ navigation }) => {
	const [propertiesCount, setPropertiesCount] = useState(0)
	const [matchesCount, setMatchesCount] = useState(0)
	const [unreadMessages, setUnreadMessages] = useState([])
	const [mostLikedListings, setMostLikedListings] = useState([])
	const [isRefreshing, refresh] = useState(true)

	useEffect(()=>{
		onLoad()
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
			const unread = uniqBy(messages.filter(message=>message.seen===0 && message.to.id === brokerId), 'from.id')
			setUnreadMessages(unread)
		} catch(e){
			console.log('GET UNREAD MESSAGES ERROR',e)
		}
	}

	const getMostLikedProperties = async () => {
		try{
			const listings = await getMostLikedPropertiesAPI()
			const mostLikedListings = get(listings,'data',[])
			setMostLikedListings(mostLikedListings.slice(0,5))
		} catch(e){
			console.log('GET MOST LIKED PROPERTIES ERROR',e)
		}
	}

	const onLoad = async () => {
		refresh(true)
		await getRecentLikes()
		await getPropertyCount()
		await getUnreadMessages()
		await getMostLikedProperties()
		refresh(false)
	}

	return(
		<Container>
			<AddListingFloatingContainer>
				<AddListingButton onPress={() => navigation.navigate('AddListing')}>
					<AddIcon source={images.add} />
				</AddListingButton>
			</AddListingFloatingContainer>
			<ContentContainer
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={onLoad}
					/>
				}
			>
				{ propertiesCount > 0 ? (
					<>
						<RecentMatches />
						<Tally properties={propertiesCount} matches={matchesCount} navigation={navigation} />
						{ size(unreadMessages) > 0 ? (<UnreadMessages messages={unreadMessages} navigation={navigation}/>) : null }
						{ size(mostLikedListings) > 0 ? (<MostPopularProperties listings={mostLikedListings} navigation={navigation}/>) : null }
					</>
				) : (
					<CenterContainer>
						<ImageLarge source={images.no_listing}/>
						<Header>Create a listing to start!</Header>
					</CenterContainer>
				)}
			</ContentContainer>
		</Container>
	)
}