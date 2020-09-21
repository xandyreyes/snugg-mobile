import React from 'react'
import { TouchableOpacity } from 'react-native'
import Back from 'src/components/Back'
import { Label } from 'src/components/styledComponents'
import TextInput from 'src/components/TextInput'
import Toggle from 'src/components/Toggle'
import Features from './Features'
import images from './images'
import {
	ButtonText,
	Container,
	Header,
	Next,
	SafeAreaView,
	ScrollView,
	TopBar,
	UploadATS,
	UploadPhotosIcon,
	UploadPhotosTouchable
} from './styledComponents'

export default ({ navigation }) => {
	return(
		<Container>
			<SafeAreaView>
				<TopBar>
					<TouchableOpacity>
						<Back navigation={navigation}/>
					</TouchableOpacity>
					<Header>New Listing</Header>
					<TouchableOpacity>
						<Next>Next</Next>
					</TouchableOpacity>
				</TopBar>
				<ScrollView>
					<TextInput label="Listing Title"/>
					<TextInput label="Price"/>
					<Header>Photos</Header>
					<UploadPhotosTouchable>
						<UploadPhotosIcon source={images.add_photos} />
						<Label>Select Photos</Label>
					</UploadPhotosTouchable>
					<Header style={{ marginBottom: 15 }}>Property Details</Header>
					<Toggle label='Property Status' values={['Sale', 'Rent']} onChangeValue={val => console.log(val)}/>
					<Toggle label='Property Type' values={['House & Lot', 'Condo']} onChangeValue={val => console.log(val)}/>
					<TextInput label="Area Size (in sqm)"/>
					<TextInput label="Bedrooms"/>
					<TextInput label="Toilets & Baths"/>
					<TextInput label="Garage"/>
					<TextInput label="Description (Optional)"/>
					<Features />
					<Header style={{ marginBottom: 5 }}>Upload ATS</Header>
					<Label>Lorem ipsum dolor sit amet, consectetur adipising elit.</Label>
					<UploadATS>
						<ButtonText>Upload ATS</ButtonText>
					</UploadATS>
				</ScrollView>
			</SafeAreaView>
		</Container>
	)
}