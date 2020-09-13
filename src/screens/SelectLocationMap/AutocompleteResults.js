import React from 'react'
import {
	FlatList
} from 'react-native'
import {
	ItemContainer,
	ItemText
} from './styledComponents'

const RenderItem = ({item, onPress}) => {
	return(
		<ItemContainer onPress={() => onPress(item)}>
			<ItemText numberOfLines={1}>{item.description}</ItemText>
		</ItemContainer>
	)
}

export default ({ items, onPress }) => {

	return(
		<FlatList
			data={items}
			renderItem={({item}) => <RenderItem item={item} onPress={onPress} />}
			keyExtractor={item => item.place_id}
		/>
	)
}