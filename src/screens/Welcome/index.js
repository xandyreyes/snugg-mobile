import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import Radar from 'react-native-radar'
import Button from 'src/components/Button'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import {
	Center,
	Header,
	Modal
} from 'src/components/styledComponents'
import { getFirebasePermissions } from 'src/utils/fcm'
import images from './images'
import {
	ButtonContainer,
	Container,
	HeaderContainer,
	Illustration,
	PWContainer,
	Text
} from './styledComponents'

Radar.on('events', (result) => {
	console.log('events:', result)
})

Radar.on('location', (result) => {
	console.log('location:', result)
})

Radar.on('clientLocation', (result) => {
	console.log('clientLocation:', result)
})

Radar.on('error', (err) => {
	console.log('error:', err)
})

export default ({ navigation }) => {

	useEffect(() => {
		Store.User.login()
		getFirebasePermissions()
	}, [])

	const start = () => {
		const { User } = Store
		console.log(User)
		if (User.data && User.data.type_id === UserType.broker) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'BrokerTabs' }]
			})
		} 
		if (User.data && User.data.type_id === UserType.buyer) {
			Radar.getPermissionsStatus(true).then((status) => {
				if (status === 'GRANTED_BACKGROUND' || status === 'GRANTED_FOREGROUND') {
					Radar.setUserId(User.data.id)
					Radar.setDescription(`Buyer ${User.data.firstname}`)
					Radar.startTrackingEfficient()
				}
				navigation.reset({
					index: 0,
					routes: [{ name: 'BuyerTabs' }]
				})
			})
		} 
		if (User.data && User.data.type_id === UserType.admin) {
			alert('Start as Admin')
		}
	}

	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
			<SafeAreaView style={{ flex: 1 }}>
				<KeyboardAvoidingView 
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
					flex={1}
				>
					<PWContainer>
						<Modal>
							<Center>
								<Illustration source={images.welcome} />
								<HeaderContainer>
									<Center>
										<Header variant="secondary" style={{ fontSize: 18 }} >Welcome to</Header>
										<Header variant="secondary" style={{ fontSize: 18 }} >Snugg Neighborhood!</Header>
									</Center>
								</HeaderContainer>
								<HeaderContainer>
									<Text>
                                        Let&apos;s get you settled in!
									</Text>
								</HeaderContainer>
								<ButtonContainer>
									<Button text="Start" onPress={start}/>
								</ButtonContainer>
							</Center>
						</Modal>
					</PWContainer>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</Container>   
	)
}