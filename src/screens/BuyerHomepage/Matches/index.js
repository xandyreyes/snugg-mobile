import React, { useEffect, useState } from 'react'
import { Alert, RefreshControl } from 'react-native'
import { getLikedListingAPI } from 'src/api/listing'
import {
	FlatList
} from './styledComponent'
import MatchItem from './MatchItem'

export default ({ navigation }) => {
	const [isRefreshing, refresh] = useState(true)
	const [likedListings, setLikedListings] = useState([])

	useEffect(() => {
		getLikedListing()
	}, [])

	const getLikedListing = async () => {
		try {
			const listings = await getLikedListingAPI()
			console.log({ listings: listings.data })
			setLikedListings(listings.data)
		} catch (err) {
			Alert.alert(
				'Something went wrong',
				'Unable to get matches',
				[
					{
						text: 'OK'
					}
				]
			)
		}
		refresh(false)
	}

	const onRefresh = () => {
		refresh(true)
		getLikedListing()
	}

	return(
		<FlatList 
			data={likedListings}
			showsVerticalScrollIndicator ={false}
			keyExtractor = { (item, index) => index.toString() }
			renderItem={({ item, index }) => (<MatchItem navigation={navigation} index={index} item={item} />)}
			refreshControl={
				<RefreshControl 
					refreshing={isRefreshing}
					onRefresh={onRefresh}
				/>
			}
		/>
	)
}