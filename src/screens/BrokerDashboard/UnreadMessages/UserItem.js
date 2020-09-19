import React from 'react'
import { 
	IconImage,
	IconTouchable
} from './styledComponents'

export default ({ item, index }) => {
	return(
		<IconTouchable style={{ marginLeft: index === 0 ? 20 : 0}}>
			<IconImage source={{ uri: item.uri }}/>
		</IconTouchable>
	)
}