import React from 'react'
import {
	RateContainer,
	Star,
} from './styledComponents'
import images from '../images'

const Rate = ({rate}) => {
	return (
		<RateContainer>
			{Array(5).fill(0).map((data, index) =>
				index < rate
					? <Star source={images.star_filled} key={index} last={index === 4}/>
					: <Star source={images.star_outlined} key={index} last={index === 4}/>
			)}
		</RateContainer>
	)
}

export default Rate
