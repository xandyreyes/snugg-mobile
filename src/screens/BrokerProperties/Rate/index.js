import React from 'react'
import {
	RateContainer,
	StarOutline,
	StarSolid
} from './styledComponents'

const Rate = ({rate}) => {
	return (
		<RateContainer>
			{Array(5).fill(0).map((data, index) =>
				index < rate
					? <StarSolid key={index} last={index === 4} first={index === 0} />
					: <StarOutline key={index} last={index === 4} first={index === 0} />
			)}
		</RateContainer>
	)
}

export default Rate
