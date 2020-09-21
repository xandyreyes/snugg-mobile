import React, {useState} from 'react'
import {
	ActivityIndicator,
	Modal,
	Platform,
	SafeAreaView
} from 'react-native'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import {
	Row
} from 'src/components/styledComponents'
import { 
	BackContainer,
	ButtonsContainer,
	Container,
	ContentContainer,
	Image,
	ImageContainer,
	LoadingContainer,
	ModalContainer,
	NoteText
} from './styledComponents'
import { createPRCRef, uploadPRCID } from '../../api/imageUpload'

const samplePhoto = 'https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/Adult_DL_Fully150dpi.jpg'

export default ({ navigation, route }) => {
	const [loading, setLoading] = useState(false)
    
	const uploadPhoto = async () => {
		// TODO: Upload photo to GCP Storage and pass image url
		const uri = route.params.croppedImage
		const filename = uri.substring(uri.lastIndexOf('/') + 1)
		const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    
		setLoading(true)

		try {
			const PRCInstance = createPRCRef(filename)
			await uploadPRCID(PRCInstance, uploadUri)
			const url = await PRCInstance.getDownloadURL()
			console.log(url)
			setLoading(false)
			navigation.navigate('SelectLocationMap')
		} catch(e) {
			console.log(e)
			console.log(e.response)
		}

	}
  
	const LoadingModal = () => {
		return (
			<Modal animationType="fade" visible={loading} transparent={true} onRequestClose={() => setLoading(false)}>
				<ModalContainer>
					<LoadingContainer>
						<ActivityIndicator color="#17365D" size="large" />
					</LoadingContainer>
				</ModalContainer>
			</Modal>
		)
	}
    
	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FFF', '#FFF', '#E8E8E8']}>
			<LoadingModal />
			<SafeAreaView style={{ flex: 1 }}>
				<BackContainer>
					<Back navigation={navigation} />
				</BackContainer>
				<ContentContainer>
					<NoteText>
            Please make sure that the details are clear and readable before submitting the photo.
					</NoteText>
					<ImageContainer>
						<Image source={{uri: route.params.croppedImage ? route.params.croppedImage : samplePhoto }} />
					</ImageContainer>
					<ButtonsContainer>
						<Row>
							<Button text="SUBMIT PHOTO" onPress={uploadPhoto}/>
						</Row>
					</ButtonsContainer>
				</ContentContainer>
                
			</SafeAreaView>
		</Container>
	)
}