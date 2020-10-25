import React, {useEffect, useRef} from 'react'
import { Animated, Dimensions } from 'react-native'
import { ScreenToggleContainer } from './styledComponents'
import Properties from './Properties'
import Reviews from './Reviews'

const width = Dimensions.get('window').width

const ScreenToggle = ({ navigation, page, propertyOptionOnPress, reviews, userId }) => {

	const toggleAnimation = useRef(new Animated.Value(0)).current

	useEffect(() => {
		if(page === 'Properties') {
			toggleSelected(0)
		} else if(page === 'Reviews') {
			toggleSelected(-width)
		}
	}, [page])

	const toggleSelected = (toValue) => {
		Animated.timing(
			toggleAnimation,
			{
				toValue,
				duration: 200,
				useNativeDriver: true
			}
		).start()
	}
  
	return (
		<Animated.View style={{
			width: '200%',
			flexDirection: 'row',
			transform: [{
				translateX: toggleAnimation
			}]
		}}>
			<ScreenToggleContainer>
				<Properties propertyOptionOnPress={propertyOptionOnPress} page={page} userId={userId} navigation={navigation} />
			</ScreenToggleContainer>
			<ScreenToggleContainer>
				<Reviews userId={userId} page={page} reviews={reviews} />
			</ScreenToggleContainer>
		</Animated.View>
	)
}

export default ScreenToggle