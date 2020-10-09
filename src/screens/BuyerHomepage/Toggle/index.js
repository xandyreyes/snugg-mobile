import React, { useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import {
	Container,
	ItemContainer,
	ItemImage,
	Row,
	Selected,
} from './styledComponents'
import images from '../images'

export default () => {

	const toggleAnimation = useRef(new Animated.Value(0)).current
	const [selected, setSelected] = useState('nearby')

	const selectedNearby = () => {
		Animated.timing(
			toggleAnimation,
			{
				toValue: 0,
				duration: 200,
				useNativeDriver: true
			}
		).start()
		setSelected('nearby')
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
		setSelected('list')
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
						<ItemImage selected={selected === 'nearby'} source={images.nearby} />
					</ItemContainer>
					<ItemContainer onPress={selectedList}>
						<ItemImage selected={selected === 'list'} source={images.list} />
					</ItemContainer>
				</Row>
			</Container>
		</View>
	)
}