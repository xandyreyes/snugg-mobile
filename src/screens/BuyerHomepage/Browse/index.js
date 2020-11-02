import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { homepageAPI } from 'src/api/homepage'
import Card from './Card'
import {
	ButtonContainer,
	Container,
	HeartEmpty,
	Image,
	Like,
	Reject,
	Row
} from './styledComponents'
import images from '../images'

const arr = [1, 2, 3, 4, 5, 6]

export default ({ location, navigation }) => {

	const [stack, setStack] = useState(arr)

	console.log({ location })

	useEffect(() => {
		retrieveData()
	}, [])

	const retrieveData = async () => {
		try {
			const homepageData = await homepageAPI({ 
				lat: location.latitude,
				lon: location.longitude
			})
			setStack(get(homepageData, 'data', []))
		} catch (err) {
			console.log(err, '[ERR RETRIEVE HOMEPAGE DATA]')
		}
	}

	const shiftArray = () => {
		stack.shift()
		setStack(stack)
	}

	// TODO: When empty array na, show no more cards

	return(
		<Container>
			<Card stack={stack} next={shiftArray} navigation={navigation} location={location} />
			<Row>
				<ButtonContainer>
					<Reject>
						<Image source={images.close} />
					</Reject>
				</ButtonContainer>
				<ButtonContainer>
					<Like>
						<HeartEmpty source={images.heart_empty} />
					</Like>
				</ButtonContainer>
			</Row>
		</Container>
	)
}