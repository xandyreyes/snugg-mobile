import React from 'react'
import { 
	Container,
	FlatList,
	Header 
} from './styledComponents'
import UserItem from './UserItem'

const arrSample = [
	{
		uri: 'https://assets.teenvogue.com/photos/5f2808c9377e7282120f40fa/16:9/w_2560%2Cc_limit/GettyImages-1177270429.jpg'
	},
	{
		uri: 'https://data.whicdn.com/images/332643176/original.jpg'
	},
	{
		uri: 'https://i.redd.it/vr8nqtf538221.jpg'
	}
]

export default () => {

	const renderItem = ({ item, index }) => {
		return(
			<UserItem item={item} index={index}/>
		)
	}

	return(
		<Container>
			<Header>Unread Messages</Header>
			<FlatList
				data={arrSample}
				renderItem={renderItem}
				keyExtractor={(item) => item.uri}
				horizontal
			/>
		</Container>
	)
}