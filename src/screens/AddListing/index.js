import React, { useEffect, useState } from 'react'
import { get, remove, size } from 'lodash'
import { Alert, FlatList, Linking, PermissionsAndroid, Platform, Text, TouchableOpacity, View } from 'react-native'
// import ImagePicker from 'react-native-customized-image-picker'
import DocumentPicker from 'react-native-document-picker'
import { listingUpdateAPI, postListingAPI } from 'src/api/listing'
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
import RNFetchBlob from 'rn-fetch-blob'

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

export default ({ navigation, route }) => {

	const initialData = {
		listing_type_id: get(route, 'params.type_id', 1),
		offer_type_id: get(route, 'params.offer_type', 1),
		name: get(route, 'params.name', ''),
		price: get(route, 'params.price', null),
		bedroom: get(route, 'params.bedroom_count', null),
		baths: get(route, 'params.toilet_bath_count', null),
		floor_area: get(route, 'params.floor_area', null),
		floor: get(route, 'params.floor_count', null),
		notes: get(route, 'params.special_notes', null),
		ats_file_url: get(route, 'params.ats_file_url', null),
		features: get(route, 'params.features', null),
		images: [],
		commission_rate: get(route, 'params.commission', 1),
		address: get(route, 'params.address', ''),
		lat: get(route, 'params.lat', null),
		lon: get(route, 'params.lon', null),
	}

	const [data, setData] = useState(initialData)
	const [dataEdit, setDataEdit] = useState({})
	const [editing, setEditing] = useState(false)
	const [features, setFeatures] = useState([])
	const [selectedImages, setImages] = useState([])
	const [selectedAts, setAts] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const listingID = get(route, 'params.id', null)
		if (listingID) {
			setEditing(true)
			setLoading(true)
			const split = get(route, 'params.features', null).split(',')
			setFeatures(split)
			const images = get(route, 'params.images', [])
			const imgUrls = images.map((img) => { 
				return {url: img.image_url} 
			})
			data.images = imgUrls
			setData({ ...data })
			setLoading(false)
		}
	}, [])
	
	const onPressNext = () => {
		navigation.navigate('SelectLocationMap', {
			data,
			title: 'Property Location',
			onNext: async (nav, location) => {
				const listing = await saveToDatabase(location, data)
				if (listing) {
					Alert.alert(
						'Listing Submitted!',
						'Please wait for the admin to approve your listing.',
						[
							{
								text: 'OK'
							}
						]
					)
					nav.reset({
						index: 0,
						routes: [{ name: 'BrokerTabs' }]
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
			dataProps.features = dataProps.features.toString()
			const listing = await postListingAPI(dataProps)
			return listing
		} catch (err) {
			console.log(err.response, '[POST LISTING ERROR]')
			Alert.alert(
				'Sorry! We can\'t post your listing!',
				err.response?.data?.message || 'We cannot process your request right now. Please try again later.',
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
			const atsUri = await uploadATS()
			const imagesUri = await uploadImages()
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

	const uploadATS = async () => {
		const stat = await RNFetchBlob.fs.stat(selectedAts.uri)
		const atsUri = await uploadToFirebase({
			storageName: config.firebase_storage.listing_ats,
			uploadUri: Platform.OS === 'ios' ? selectedAts.uri.replace('file://', '') : stat.path
		})
		return atsUri
	}

	const uploadImages = async () => {
		const imagesUri = await Promise.all(selectedImages.map( async (item, index) => {
			const stat = await RNFetchBlob.fs.stat(item.uri)
			console.log(stat, index)
			const url = await uploadToFirebase({
				uploadUri: Platform.OS === 'ios' ? item.path : stat.path,
				storageName: config.firebase_storage.listing_photos
			})
			console.log('URL', url)
			return {url}
		}))
		return imagesUri
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
		// if (size(selectedImages) < 3) {
		// 	Alert.alert(
		// 		'Requires more photos',
		// 		'Please select at least 3 photos to continue.',
		// 		[{
		// 			text: 'OK'
		// 		}]
		// 	)
		// 	return
		// }
		uploadFiles()
	}

	const onChangeText = (text, field, type) => {
		if (type === 'number') {
			data[field] = parseFloat(text)
			setData({...data})
			if (editing) {
				edit(field, parseFloat(text))
			}
		} else {
			data[field] = text
			setData({...data})
			if (editing) {
				edit(field, text)
			}
		}
	}

	const edit = (field, text) => {
		if (field === 'notes') {
			field = 'special_notes'
		}
		setDataEdit({
			...dataEdit,
			[field]: parseFloat(text)
		})
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
			alert('Select image')
			// const images = await ImagePicker.openPicker({
			// 	maxSize,
			// 	multiple: true,
			// })
			// setImages(images)
		} else {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
				{
					title: 'Snugg Neighborhood Storage Permission',
					message:
						'Snugg needs access to your storage ' +
						'so you can upload awesome pictures of your listngs.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK'
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				const images = await DocumentPicker.pickMultiple({
					type: [DocumentPicker.types.allFiles],
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

	const openATS = url => {
		Linking.openURL(url)
	}

	const onPressSave = async () => {
		setLoading(true)
		try {
			// if (size(selectedImages) > 0) {
			// 	const imagesUri = await uploadImages()
			// 	data.images.concat(imagesUri)
			// }
			// if (selectedAts) {
			// 	const atsUri = await uploadATS()
			// 	data.ats_file_url = atsUri
			// }
			// data.features = features.toString()
			setData({ ...data })
			// const update = await listingUpdateAPI(get(route, 'params.id', 1), data)
			console.log('data', data)
		} catch (err) {
			setLoading(false)
			Alert.alert(
				'Can\'t save changes',
				get(err, 'response.data.message', 'Network Error'),
				[
					{ text: 'OK' }
				]
			)
			console.log({ err: err.response.data }, '[ERR ONPRESS SAVE]')
		}
	}

	const removeImage = (item) =>{
		if (item.url != undefined) {
			alert('coming soon')
		}else {
		// console.log('Image', selectedImages)
			let alteredArray = []
			alteredArray = selectedImages.filter(function(e){
				return e.uri != item.uri
			})
			setImages(alteredArray)
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
					<Header>{editing ? 'Update Listing' : 'New Listing'}</Header>
					<TouchableOpacity onPress={editing ? onPressSave :validate}>
						<Next>{editing ? 'Save' : 'Next'}</Next>
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
					{ editing ? (
						<PhotoPreviewContainer>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={[...data.images, ...selectedImages]}
								keyExtractor={(item, index) => `${item.fileName}-${index}`}
								renderItem={({ item, index }) =>
									<View>
										<PhotoPreview key={`${Platform.OS === 'ios' ? item.fileName : item.name}-${index}`} source={{ uri: item.url ? item.url : Platform.OS === 'ios' ? item.path : item.fileCopyUri }} />
										<TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-end', right: 10}} 
											onPress={()=>removeImage(item)}
										>
											<Text style={{
												color: 'red', fontSize: 20, fontWeight: 'bold', 
											}}>X</Text>
										</TouchableOpacity>
									</View>								
								}
							/>
							<TouchableOpacity onPress={selectImage} style={{ alignSelf: 'flex-end', marginTop: 5 }}>
								<Label>Change Photos</Label>
							</TouchableOpacity>
						</PhotoPreviewContainer>
					) : size(selectedImages) > 0 ? (
						<PhotoPreviewContainer>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={selectedImages}
								keyExtractor={(item, index) => `${item.fileName}-${index}`}
								renderItem={({ item, index }) => 
									<View>
										<PhotoPreview key={`${Platform.OS === 'ios' ? item.fileName : item.name}-${index}`} source={{ uri: Platform.OS === 'ios' ? item.path : item.fileCopyUri }} />
										<TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', right: 10 }}
											onPress={() => removeImage(item)}
										>
											<Text style={{
												color: 'red', fontSize: 20, fontWeight: 'bold',
											}}>X</Text>
										</TouchableOpacity>
									</View>
								}
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
						editSelected={data.features}
					/>
					<Header style={{ marginBottom: 5 }}>Upload ATS</Header>
					<Label>Lorem ipsum dolor sit amet, consectetur adipising elit.</Label>
					{ editing && (
						<TouchableOpacity onPress={() => openATS(data.ats_file_url)}>
							<Label style={{ padding: 5, fontWeight: '600' }} numberOfLines={1}>{data.ats_file_url}</Label>
						</TouchableOpacity>
					)}
					<UploadATS onPress={selectDocument}>
						<ButtonText>{ selectedAts ? selectedAts.name : 'Upload ATS' }</ButtonText>
					</UploadATS>
				</ScrollView>
			</SafeAreaView>
		</Container>
	)
}