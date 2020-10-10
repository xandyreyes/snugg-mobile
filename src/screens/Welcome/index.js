import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import Button from 'src/components/Button'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import {
	Center,
	Header,
	Modal
} from 'src/components/styledComponents'
import images from './images'
import {
	ButtonContainer,
	Container,
	HeaderContainer,
	Illustration,
	PWContainer,
	Text
} from './styledComponents'

export default ({ navigation }) => {

	const start = () => {
		const { User } = Store
		if (User.data && User.data.type_id === UserType.broker) {
			// navigation.reset({
			// 	index: 0,
			// 	routes: [{ name: 'BrokerDashboard' }]
			// })
			navigation.navigate('Home')
		} 
		if (User.data && User.data.type_id === UserType.buyer) {
			alert('Start as Buyer')
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