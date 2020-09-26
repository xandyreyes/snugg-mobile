import React, { useState } from 'react'
import { get, remove, size } from 'lodash'
import { Alert, FlatList, Platform, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-customized-image-picker'
import DocumentPicker from 'react-native-document-picker'
import { postListingAPI } from 'src/api/listing'
import Back from 'src/components/Back'
import Loading from 'src/components/Loading'
import { Label } from 'src/components/styledComponents'
import TextInput from 'src/components/TextInput'
import Toggle from 'src/components/Toggle'
import config from 'src/config'
import { Store } from 'src/store'
import uploadToFirebase from 'src/utils/uploadToFirebase'
import Features from './Features'
import images from './images'
import {
	ButtonText,
	Container,
	Header,
	Next,
	PhotoPreview,
	PhotoPreviewContainer,
	SafeAreaView,
	ScrollView,
	TopBar,
	UploadATS,
	UploadPhotosIcon,
	UploadPhotosTouchable
} from './styledComponents'

const propertyStatus = [
	{
		value: 1,
		label: 'Sale'
	},
	{
		value: 2,
		label: 'Rent'
	}
]

const propertyType = [
	{
		value: 1,
		label: 'House & Lot'
	},
	{
		value: 2,
		label: 'Condo'
	}
]

export default ({ navigation }) => {

	const [data, setData] = useState({
		listing_type_id : 1,
		offer_type_id : 1,
		name : '',
		price : null,
		bedroom : null,
		baths : null,
		floor_area : null,
		floor: null,
		notes : null,
		ats_file_url: null,
		features: '',
		images: [],
		commission_rate: 1,
		address: '',
		lat: null,
		lon: null
	})
	const [features, setFeatures] = useState([])
	const [selectedImages, setImages] = useState([])
	const [selectedAts, setAts] = useState(null)
	const [loading, setLoading] = useState(false)
	
	const onPressNext = () => {
		navigation.navigate('SelectLocationMap', {
			data,
			title: 'Property Location',
			onNext: async (nav, location, dataProps) => {
				const listing = await saveToDatabase(location, dataProps)
				if (listing) {
					nav.reset({
						index: 0,
						routes: [{ name: 'BrokerDashboard' }]
					})
				}
			}
		})
	}

	const saveToDatabase = async (location, dataProps) => {
		try {
			dataProps.address = location.address
			dataProps.lat = location.latitude
			dataProps.lon = location.longitude
			const listing = await postListingAPI(dataProps)
			return listing
		} catch (err) {
			console.log(err.response, '[POST LISTING ERROR]')
			Alert.alert(
				'Sorry! Something went wrong',
				'We cannot process your request right now. Please try again later.',
				[
					{
						text: 'OK'
					}
				]
			)
		}
	}

	const uploadFiles = async () => {
		setLoading(true)
		try {
			const uploadAtsUri = Platform.OS === 'ios' ? selectedAts.uri.replace('file://', '') : selectedAts.uri
			const atsUri = await uploadToFirebase({
				storageName: config.firebase_storage.listing_ats,
				uploadUri: uploadAtsUri
			})
			const imagesUri = await Promise.all(selectedImages.map( async (item) => {
				console.log({ item })
				const url = await uploadToFirebase({
					uploadUri: Platform.OS === 'ios' ? item.path : item.uri,
					storageName: config.firebase_storage.listing_photos
				})
				return {url}
			}))
			data.ats_file_url = atsUri
			data.images = imagesUri
			data.features = features.toString()
			setData({ ...data })
			setLoading(false)
			onPressNext()
		} catch (err) {
			setLoading(false)
			console.log(err, '[UPLOAD ERROR]')
		}
	}

	const validate = () => {
		if (!data.price || !data.bedroom || data.name === '' || !data.floor_area || !data.baths || !data.floor || !data.notes) {
			Alert.alert(
				'Some fields are required!',
				'Please input data for each field to continue.',
				[{
					text: 'OK'
				}]
			)
			return
		}
		if (!selectedAts) {
			Alert.alert(
				'ATS not found',
				'Please select a .PDF file for the ATS.',
				[{
					text: 'OK'
				}]
			)
			return
		}
		if (size(selectedImages) < 3) {
			Alert.alert(
				'Requires more photos',
				'Please select at least 3 photos to continue.',
				[{
					text: 'OK'
				}]
			)
			return
		}
		uploadFiles()
	}

	const onChangeText = (text, field, type) => {
		if (type === 'number') {
			data[field] = parseFloat(text)
			setData({...data})
		} else {
			data[field] = text
			setData({...data})
		}
	}

	const onSelectFeature = val => {
		if (features.includes(val)) {
			remove(features, item => item === val)
		} else {
			features.push(val)
		}
		setFeatures(features)
	}

	const selectImage = async () => {
		const { User } = Store
		const maxSize = get(User, 'data.broker_details.subscription.photos_per_listing', 3)
		if (Platform.OS === 'ios') {
			const images = await ImagePicker.openPicker({
				maxSize,
				multiple: true,
			})
			setImages(images)
		} else {
			const images = await DocumentPicker.pickMultiple({
				type: [DocumentPicker.types.images],
			})
			if (size(images) > maxSize) {
				Alert.alert(
					`You can only select up to ${maxSize} images`,
					`Your current subscription could only upload up to ${maxSize} images per listing. You could upgrade your listing to upload more photos.`,
					[
						{
							text: 'OK'
						}
					]
				)
			} else {
				setImages(images)
			}
		}
	}

	const selectDocument = async () => {
		try {
			const document = await DocumentPicker.pick({
				type: [DocumentPicker.types.pdf],
			})
			setAts(document)
		} catch (err) {
			console.log(err, '[DOCUMENT PICKER ERROR]')
			Alert.alert(
				'Failed to get document',
				'Unable to select a document.',
				[
					{
						text: 'OK'
					}
				]
			)
		}
	}

	return(
		<Container>
			{ loading && (
				<Loading />
			) }
			<SafeAreaView>
				<TopBar>
					<TouchableOpacity>
						<Back navigation={navigation}/>
					</TouchableOpacity>
					<Header>New Listing</Header>
					<TouchableOpacity onPress={validate}>
						<Next>Next</Next>
					</TouchableOpacity>
				</TopBar>
				<ScrollView>
					<TextInput label="Listing Title" value={data.name} onChangeText={text => onChangeText(text, 'name')}/>
					<TextInput 
						label="Price" 
						value={data.price ? data.price.toString() : ''} 
						onChangeText={text => onChangeText(text, 'price', 'number')}
					/>
					<Header>Photos</Header>
					{ size(selectedImages) > 0 ? (
						<PhotoPreviewContainer>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={selectedImages}
								keyExtractor={(item, index) => `${item.fileName}-${index}`}
								renderItem={({ item, index }) => <PhotoPreview key={`${Platform.OS === 'ios' ? item.fileName : item.name}-${index}`} source={{ uri: Platform.OS === 'ios' ? item.path : item.fileCopyUri }} />}
							/>
							<TouchableOpacity onPress={selectImage} style={{ alignSelf: 'flex-end', marginTop: 5 }}>
								<Label>Change Photos</Label>
							</TouchableOpacity>
						</PhotoPreviewContainer>
					) : (
						<UploadPhotosTouchable onPress={selectImage}>
							<UploadPhotosIcon source={images.add_photos} />
							<Label>Select Photos</Label>
						</UploadPhotosTouchable>
					) }
					
					<Header style={{ marginBottom: 15 }}>Property Details</Header>
					<Toggle label='Property Status' values={propertyStatus} onChangeValue={val => onChangeText(val, 'offer_type_id', 'number')}/>
					<Toggle label='Property Type' values={propertyType} onChangeValue={val => onChangeText(val, 'listing_type_id', 'number')}/>
					<TextInput 
						label="Area Size (in sqm)"
						value={data.floor_area ? data.floor_area.toString() : ''} 
						onChangeText={text => onChangeText(text, 'floor_area', 'number')}
					/>
					<TextInput 
						label="Bedrooms"
						value={data.bedroom ? data.bedroom.toString() : ''} 
						onChangeText={text => onChangeText(text, 'bedroom', 'number')}
					/>
					<TextInput 
						label="Toilets & Baths"
						value={data.baths ? data.baths.toString() : ''} 
						onChangeText={text => onChangeText(text, 'baths', 'number')}
					/>
					<TextInput
						label="Floor"
						value={data.floor ? data.floor.toString() : ''} 
						onChangeText={text => onChangeText(text, 'floor', 'number')}
					/>
					<TextInput 
						label="Description"
						value={data.notes} 
						onChangeText={text => onChangeText(text, 'notes', 'text')}
					/>
					<Features
						selected={features}
						onSelect={onSelectFeature}
					/>
					<Header style={{ marginBottom: 5 }}>Upload ATS</Header>
					<Label>Lorem ipsum dolor sit amet, consectetur adipising elit.</Label>
					<UploadATS onPress={selectDocument}>
						<ButtonText>{ selectedAts ? selectedAts.name : 'Upload ATS' }</ButtonText>
					</UploadATS>
				</ScrollView>
			</SafeAreaView>
		</Container>
	)
}