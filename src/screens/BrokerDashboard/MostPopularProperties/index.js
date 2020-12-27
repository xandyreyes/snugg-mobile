import React, { useEffect, useState} from 'react'
import { size } from 'lodash'
import { 
	Container,
	FlatList,
	Header 
} from './styledComponents'
import PropertyItem from './PropertyItem'

// const arrSample = [
// 	{
// 		uri: 'https://assets.teenvogue.com/photos/5f2808c9377e7282120f40fa/16:9/w_2560%2Cc_limit/GettyImages-1177270429.jpg'
// 	},
// 	{
// 		uri: 'https://data.whicdn.com/images/332643176/original.jpg'
// 	},
// 	{
// 		uri: 'https://i.redd.it/vr8nqtf538221.jpg'
// 	}
// ]

export default ({listings,navigation}) => {
	const [listingItems,setListingItems] = useState([])

	useEffect(()=>{
		if(size(listings)>0){
			setListingItems(listings)
		}
	},[listings])

	const renderItem = ({ item, index }) => {
		return(
			<PropertyItem item={item} index={index} navigation={navigation}/>
		)
	}

	return(
		<Container>
			<Header>Popular Properties</Header>
			<FlatList
				data={listingItems}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</Container>
	)
}