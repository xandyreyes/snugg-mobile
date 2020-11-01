import React, { useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import {
	Container,
	ItemContainer,
	ItemImage,
	Row,
	Selected,
} from './styledComponents'
import images from '../images'

export default ({ selectedView, selectMatches, selectNearby }) => {

	const toggleAnimation = useRef(new Animated.Value(0)).current
	const [selected, setSelected] = useState(selectedView)

	useEffect(() => {
		if (selectedView === 'Matches') {
			selectedList()
		}
		if (selectedView === 'Nearby') {
			selectedNearby()
		}
	}, [selectedView])

	const selectedNearby = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: 0,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		selectNearby()
		setSelected('Nearby')
	}
    
	const selectedList = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: 48,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		selectMatches()
		setSelected('Matches')
	}

	return(
		<View>
			<Container>
				<Animated.View style={{
					position: 'absolute',
					height: 42,
					width: '100%',
					transform: [{
						translateX: toggleAnimation
					}]
				}}>
					<Selected />
				</Animated.View>
				<Row>
					<ItemContainer onPress={selectedNearby}>
						<ItemImage selected={selected === 'Nearby'} source={images.nearby} />
					</ItemContainer>
					<ItemContainer onPress={selectedList}>
						<ItemImage selected={selected === 'Matches'} source={images.list} />
					</ItemContainer>
				</Row>
			</Container>
		</View>
	)
}