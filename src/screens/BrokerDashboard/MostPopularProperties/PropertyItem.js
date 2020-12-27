import React, {useEffect, useState, useCallback} from 'react'
import { getListingByIdAPI } from '../../../api/listing'
import images from '../images'
import { 
	HeartIcon,
	LocationIcon,
	LocationName,
	Matches,
	PropertyDetails,
	PropertyImage,
	PropertyName,
	PropertyTouchable,
	Row
} from './styledComponents'

export default ({ item, index, navigation }) => {
	const [listing, setListing] = useState(null)
	const [matches,setMatches] = useState(item.total)
	const fetchListingItem = useCallback(async()=>{
		if(item.listing_id){
			const list = await getListingByIdAPI(item.listing_id)
			setListing(list.data)
		}
	},[])
	useEffect(()=>{
		if(item.listing_id){
			fetchListingItem()
		}
	},[])
	if(!listing){
		return null;
	}
	return(
		<PropertyTouchable onPress={() => navigation.navigate('PropertyProfile', {
			...listing
		})} style={{ marginLeft: index === 0 ? 20 : 0 }}>
			<PropertyImage source={{ uri: listing.images[0].image_url }}/>
			<PropertyDetails>
				<PropertyName numberOfLines={2}>{listing.name}</PropertyName>
				<Row>
					<LocationIcon source={images.pin_location} />
					<LocationName>{listing.address}</LocationName>
				</Row>
				<Row>
					<HeartIcon />
					<Matches>{`${matches} Matches`}</Matches>
				</Row>
			</PropertyDetails>
		</PropertyTouchable>
	)	
}