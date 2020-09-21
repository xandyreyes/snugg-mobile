import React from 'react'
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

export default ({ item, index }) => {
	return(
		<PropertyTouchable style={{ marginLeft: index === 0 ? 20 : 0 }}>
			<PropertyImage source={{ uri: item.uri }}/>
			<PropertyDetails>
				<PropertyName numberOfLines={2}>Lorem ipsum dolor isit amet</PropertyName>
				<Row>
					<LocationIcon />
					<LocationName>Greenhills, San Juan City</LocationName>
				</Row>
				<Row>
					<HeartIcon />
					<Matches>27 Matches</Matches>
				</Row>
			</PropertyDetails>
		</PropertyTouchable>
	)
}