import React, { useState } from 'react'
import { remove } from 'lodash'
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

	const [data, setData] = useState({
		listing_type_id : 1,
		offer_type_id : 2,
		name : 'House and Lot Sample',
		price : 100000000000.00,
		bedroom : 1,
		baths : 1,
		floor_area : 69.96,
		floor : 2,
		garage: 0,
		images : [
			{
				url : 'https://www.goggle.com/img1.png'
			},
			{
				url : 'https://www.goggle.com/img2.png'
			}
		],
		notes : 'this house is for crazy rich filipino',
	})
	const [features, setFeatures] = useState([])

	const onPressNext = () => {
		navigation.navigate('SelectLocationMap', {
			title: 'Property Location',
			onNext: (nav) => {
				nav.navigate('SelectSubscriptionPlan')
			}
		})
	}

	const onChangeText = (text, field, type) => {
		if (type === 'number') {
			data[field] = parseFloat(text)
			setData(data)
		} else {
			data[field] = text
			setData(data)
		}
	}

	const onSelectFeature = val => {
		if (features.includes(val)) {
			remove(features, val)
		} else {
			features.push(val)
		}
		setFeatures(features)
	}

	return(
		<Container>
			<SafeAreaView>
				<TopBar>
					<TouchableOpacity>
						<Back navigation={navigation}/>
					</TouchableOpacity>
					<Header>New Listing</Header>
					<TouchableOpacity onPress={onPressNext}>
						<Next>Next</Next>
					</TouchableOpacity>
				</TopBar>
				<ScrollView>
					<TextInput label="Listing Title" value={data.name} onChangeText={text => onChangeText(text, 'name')}/>
					<TextInput 
						label="Price" 
						value={data.price.toString()} 
						onChangeText={text => onChangeText(text, 'price', 'number')}
					/>
					<Header>Photos</Header>
					<UploadPhotosTouchable>
						<UploadPhotosIcon source={images.add_photos} />
						<Label>Select Photos</Label>
					</UploadPhotosTouchable>
					<Header style={{ marginBottom: 15 }}>Property Details</Header>
					<Toggle label='Property Status' values={['Sale', 'Rent']} onChangeValue={val => console.log(val)}/>
					<Toggle label='Property Type' values={['House & Lot', 'Condo']} onChangeValue={val => console.log(val)}/>
					<TextInput 
						label="Area Size (in sqm)"
						value={data.floor_area.toString()} 
						onChangeText={text => onChangeText(text, 'floor_area', 'number')}
					/>
					<TextInput 
						label="Bedrooms"
						value={data.bedroom.toString()} 
						onChangeText={text => onChangeText(text, 'bedroom', 'number')}
					/>
					<TextInput 
						label="Toilets & Baths"
						value={data.baths.toString()} 
						onChangeText={text => onChangeText(text, 'baths', 'number')}
					/>
					<TextInput
						label="Garage"
						value={data.garage.toString()} 
						onChangeText={text => onChangeText(text, 'garage', 'number')}
					/>
					<TextInput 
						label="Description (Optional)"
						value={data.notes.toString()} 
						onChangeText={text => onChangeText(text, 'notes', 'number')}
					/>
					<Features
						selected={features}
						onSelect={onSelectFeature}
					/>
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