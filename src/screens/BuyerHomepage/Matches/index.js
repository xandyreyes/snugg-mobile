import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { getLikedListingAPI } from 'src/api/listing'
import {
	FlatList
} from './styledComponent'
import MatchItem from './MatchItem'

export default ({ navigation }) => {

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
	}

	return(
		<FlatList 
			data={likedListings}
			showsVerticalScrollIndicator ={false}
			keyExtractor = { (item, index) => index.toString() }
			renderItem={({ item, index }) => (<MatchItem navigation={navigation} index={index} item={item} />)}
		/>
	)
}