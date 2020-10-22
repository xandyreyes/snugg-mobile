import React, {useEffect, useState} from 'react'
import { RatingButton, RatingContainer, RatingIcon, RatingIconSolid } from './styledComponents'
import images from '../images'

const Rating = ({ onChangeRate, defaultRate }) => {

	const [rate, setRate] = useState(defaultRate)

	useEffect(() => {
		setRate(defaultRate)
	}, [defaultRate])

	const changeRate = r => () => {
		if(r !== rate) {
			setRate(r)
			onChangeRate(r)
		}
	}

	return (
		<RatingContainer>
			{Array(5).fill(0).map((s, index) =>
				<RatingButton
					key={index}
					first={index === 0}
					last={index === 4}
					activeOpacity={1}
					onPress={changeRate(index + 1)}>
					{index < rate
						? <RatingIconSolid source={images.star_filled} />
						: <RatingIcon source={images.star_outlined} />
					}
				</RatingButton>
			)}
		</RatingContainer>
	)
}

export default Rating