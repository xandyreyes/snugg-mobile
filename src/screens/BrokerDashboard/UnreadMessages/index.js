import React, { useEffect, useState } from 'react'
import { size } from 'lodash'
import { 
	Container,
	FlatList,
	Header 
} from './styledComponents'
import UserItem from './UserItem'

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

export default ({messages}) => {
	const [unreadMessages,setUnreadMessages] = useState([])

	useEffect(()=>{
		if(size(messages)>0){
			setUnreadMessages(messages)
		}
	},[messages])
	
	const renderItem = ({ item, index }) => { 
		return(
			<UserItem item={item} index={index}/>
		)
	}
	if(size(messages)<1){
		return null
	}
	return(
		<Container>
			<Header>Unread Messages</Header>
			<FlatList
				data={unreadMessages}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				horizontal
			/>
		</Container>
	)
}