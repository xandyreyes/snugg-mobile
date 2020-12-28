import React, {useEffect, useState} from 'react'
import { get } from 'lodash'
import { 
	IconImage,
	IconTouchable
} from './styledComponents'
import images from '../images'
export default ({ item, index }) => {
	const [url,setImageUrl] = useState(null)

	useEffect(()=>{
		const profileimg = get(item,'from.profile_img',null)
		if(profileimg){
			setImageUrl({uri:profileimg})
		} else {
			setImageUrl(images.default_image)
		}
	},[item])
	
	return(
		<IconTouchable style={{ marginLeft: index === 0 ? 20 : 0}}>
			<IconImage source={ url }/>
		</IconTouchable>
	)
}