import React from 'react'
import { TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Back from 'src/components/Back'
import formatMoney from 'src/utils/formatMoney'
import {
	ButtonsRow,
	Container,
	PriceContainer,
	PriceText,
	PropertyImage,
	SafeAreaView,
	ShareImage
} from './styledComponents'
import images from '../images'

export default ({ navigation, propertyImages, price }) => {
	return(
		<Container>
			<Swiper autoplay={true} autoplayTimeout={5} activeDotColor={'#EC7050'}>
				{ propertyImages.map(
					(img, index) => <PropertyImage key={index} source={{ uri: img.image_url}} />
				) }
			</Swiper>
			<SafeAreaView>
				<ButtonsRow>
					<Back navigation={navigation} color="white" />
					<TouchableOpacity>
						<ShareImage source={images.share} />
					</TouchableOpacity>
				</ButtonsRow>
			</SafeAreaView>
			<PriceContainer>
				<PriceText>P{formatMoney(price)}</PriceText>
			</PriceContainer>
		</Container>
	)
}