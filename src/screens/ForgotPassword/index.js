import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import Loading from 'src/components/Loading'
import {
	Center,
	Header,
	Input,
	Modal
} from 'src/components/styledComponents'
import validateEmail from 'src/utils/validateEmail'
import images from './images'
import {
	BackButtonContainer,
	ButtonContainer,
	Container,
	HeaderContainer,
	Illustration,
	PWContainer,
	Text
} from './styledComponents'
import { forgotPasswordAPI } from '../../api/auth'
export default ({ navigation }) => {

	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const sendEmail = async () => {
		if(email === '') {
			Alert.alert('Invalid Email', 'You email is required to continue.')
			return
		}
		if(!validateEmail(email)) {
			Alert.alert('Invalid Email', 'You entered an invalid email.')
			return
		}
		setLoading(true)
		try {
			await forgotPasswordAPI({email})
			setLoading(false)
			Alert.alert(
				'Email Sent!',
				'The password reset link has been sent to your email.',
				[
					{
						cancelable: false
					}, {
						text: 'OK',
						onPress: () => navigation.navigate('Login')
					}
				]
			)
		} catch(e) {
			setLoading(false)
			console.log('[ERROR FORGOT PASSWORD]', e.response.data)
			Alert.alert(
				'Error',
				e.response.data.error === 'passwords.user'
					? 'The email you enter does not exist.'
					: 'Password reset link already sent.'
			)
		}
	}
  
	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
			{ loading && (<Loading />) }
			<SafeAreaView style={{ flex: 1 }}>
				<KeyboardAvoidingView 
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
					flex={1}
				>
					<PWContainer>
						<BackButtonContainer>
							<Back navigation={navigation} color="white" />
						</BackButtonContainer>
						<Modal>
							<Center>
								<Illustration source={images.forgot_password} />
								<HeaderContainer>
									<Header variant="secondary" >Forgot Password</Header>
								</HeaderContainer>
								<HeaderContainer>
									<Text>
                    Enter your registered email to reset your password
									</Text>
								</HeaderContainer>
								<HeaderContainer style={{ width: '100%' }}>
									<Input style={{ width: '100%' }} placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
								</HeaderContainer>
								<ButtonContainer>
									<Button text="SEND EMAIL" onPress={sendEmail}/>
								</ButtonContainer>
							</Center>
						</Modal>
					</PWContainer>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</Container>   
	)
}