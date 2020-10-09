import React from 'react'
import { TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Back from 'src/components/Back'
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

const arr = [
	{
		uri: 'https://static-assets.profiles.hallyulife.com/lalisa-manoban-photo-welcoming-collection.jpg'
	},
	{
		uri: 'https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2018/11/cover-BLACKPINK-Rose-Instagram-Photo-26-November-2018-furr-coat.jpg'
	},
	{
		uri: 'https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/roseblackpink1.png'
	}
]

export default ({ navigation }) => {
	return(
		<Container>
			<Swiper autoplay={true} autoplayTimeout={5} activeDotColor={'#EC7050'}>
				{ arr.map(
					(img, index) => <PropertyImage key={index} source={{ uri: img.uri}} />
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
				<PriceText>P12,000,000.00</PriceText>
			</PriceContainer>
		</Container>
	)
}