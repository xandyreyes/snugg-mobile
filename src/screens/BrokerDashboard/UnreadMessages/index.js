import React, { useEffect, useState } from 'react'
import { size } from 'lodash'
import { 
	Container,
	FlatList,
	Header 
} from './styledComponents'
import UserItem from './UserItem'

export default ({messages, navigation}) => {
	const [unreadMessages,setUnreadMessages] = useState([])

	useEffect(()=>{
		if(size(messages)>0){
			setUnreadMessages(messages)
		}
	},[messages])
	
	const renderItem = ({ item, index }) => { 
		return(
			<UserItem item={item} index={index} navigation={navigation}/>
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