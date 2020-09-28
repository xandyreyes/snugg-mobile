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
import config from 'src/config'
import uploadToFirebase from 'src/utils/uploadToFirebase'
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

const samplePhoto = 'https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/Adult_DL_Fully150dpi.jpg'

export default ({ navigation, route }) => {
	const [loading, setLoading] = useState(false)
    
	const uploadPhoto = async () => {
		const uri = route.params.croppedImage
		const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
		setLoading(true)
		try {
			const url = await uploadToFirebase({
				uploadUri,
				storageName: config.firebase_storage.prc_id,
			})
			console.log(url, '[URL]')
			setLoading(false)
			navigation.navigate('SelectLocationMap', {
				title: 'Enter your location',
				onNext: (nav, location) => {
					nav.navigate('SelectSubscriptionPlan', {location, prc_id: url})
				}
			})
		} catch(e) {
			console.log(e.response, '[UPLOAD PHOTO ERROR]')
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