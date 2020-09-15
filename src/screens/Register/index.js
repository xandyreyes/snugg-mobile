import React, { useState } from 'react'
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	TouchableOpacity,
	Alert
} from 'react-native'
import { signUpAPI } from 'src/api/auth'
import Button from 'src/components/Button'
import {
	Center,
	Header,
	Input
} from 'src/components/styledComponents'
import { SubscriptionType, UserType } from 'src/constants'
import images from './images'
import { 
	ButtonContainer,
	Container,
	Illustration,
	LoginContainer,
	LoginTextTouchable,
	RegisterAsContainer,
	Text,
	TNC
} from './styledComponents'
import Toggle from './Toggle'

export default ({ navigation }) => {

	const registerData = {
		first_name: '',
		middle_name: '',
		last_name: '',
		email: '',
		contact_number: '',
		address: '',
		password: '',
		password_confirmation: '',
		user_type: UserType.buyer
	}

	const [info, setInfo] = useState(registerData)

	const goBack = () => navigation.goBack()

	const signUp = async () => {
		if(
			info.first_name === '' || info.middle_name === '' || info.last_name === '' ||
			info.email === '' || info.contact_number === '' || info.password === ''
		) {
			Alert.alert('Fill up form', 'You need to fill up the form in order to proceed')
			return
		}

		if(info.password !== info.password_confirmation) {
			Alert.alert('Password Mismatch', 'Password you fill up don\'t match. Please try again')
			return
		}
  
		try {
			if(info.user_type === UserType.broker) {
				info.subscription_type = SubscriptionType.trial
			}
      
			const response = await signUpAPI(info)

			Alert.alert(
				'Email Confirmation',
				response.message,
				[  
					{  
						cancelable: false
					}, {
						text: 'OK',
						onPress: checkUserType
					}
				]  
			)
		} catch (e) {
			const errData = Object.entries(e.response.data.errors).map(obj => {
				return obj[1].join('\n')
			})
			Alert.alert(e.response.data.message, errData.join('\n'))
			console.log('[ERROR SIGN UP]', e.response.data)
		}
	}

	const onChangeText = (text, field) => {
		info[field] = text
		setInfo(info)
	}
  
	const checkUserType = () => {
		navigation.navigate(
			info.user_type === UserType.buyer
				? 'EnableLocation'
				: 'Capture'
		)
	}

	return(
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAvoidingView 
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
				flex={1}
			>
				<Container showsVerticalScrollIndicator={false}>
					<Header>Sign Up</Header>
					<Input placeholder="First Name" onChangeText={text => onChangeText(text, 'first_name')}/>
					<Input placeholder="Middle Name" onChangeText={text => onChangeText(text, 'middle_name')}/>
					<Input placeholder="Last Name" onChangeText={text => onChangeText(text, 'last_name')}/>
					<Input placeholder="Email" onChangeText={text => onChangeText(text, 'email')} keyboardType="email-address"/>
					<Input placeholder="Phone Number" onChangeText={text => onChangeText(text, 'contact_number')} keyboardType="numeric"/>
					<Input placeholder="Address" onChangeText={text => onChangeText(text, 'address')}/>
					<Input 
						placeholder="Password" 
						onChangeText={text => onChangeText(text, 'password')}
						secureTextEntry={true}
					/>
					<Input 
						placeholder="Confirm Password" 
						onChangeText={text => onChangeText(text, 'password_confirmation')}
						secureTextEntry={true}
					/>
					<RegisterAsContainer>
						<Text>Register as a:</Text>
						<Toggle onChangeToggle={(text, field) => onChangeText(text, field)} registerAs={'Buyer'}/>
					</RegisterAsContainer>
					<TNC>
						<Center>
							<Text>By signing up, you agree to the</Text>
							<Text>Terms and Conditions.</Text>
							<ButtonContainer>
								<Button text={'SIGN UP'} onPress={signUp}/>
							</ButtonContainer>
						</Center>
					</TNC>
					<LoginContainer>
						<Text>Already have an account?</Text>
						<TouchableOpacity style={{flexDirection: 'row'}} onPress={goBack}><LoginTextTouchable>Login</LoginTextTouchable><Text>.</Text></TouchableOpacity>
					</LoginContainer>
					<Center>
						<Illustration source={images.signup} />
					</Center>
				</Container>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}