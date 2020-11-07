import React, { useEffect, useRef, useState } from 'react'
import { get } from 'lodash'
import { Animated, Dimensions } from 'react-native'
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

const SCREEN_WIDTH = Dimensions.get('screen').width

export default ({ location, navigation }) => {

	const pan = useRef(new Animated.ValueXY())
	const [stack, setStack] = useState([])

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
		setStack([...stack])
	}

	const onLike = () => {
		Animated.spring(pan.current, {
			toValue: { x: SCREEN_WIDTH + 100, y: 0 },
			useNativeDriver: true
		}).start(() => {
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
		setTimeout(() => {
			navigation.navigate('Match')
		}, 500)
	}

	const onDisLike = () => {
		Animated.spring(pan.current, {
			toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
			useNativeDriver: true
		}).start(() => {
			shiftArray()
			pan.current.setValue({ x: 0, y: 0 })
		})
	}

	// TODO: When empty array na, show no more cards

	return(
		<Container>
			<Card pan={pan} stack={stack} next={shiftArray} navigation={navigation} location={location} />
			<Row>
				<ButtonContainer>
					<Reject onPress={onDisLike}>
						<Image source={images.close} />
					</Reject>
				</ButtonContainer>
				<ButtonContainer >
					<Like onPress={onLike}>
						<HeartEmpty source={images.heart_empty} />
					</Like>
				</ButtonContainer>
			</Row>
		</Container>
	)
}