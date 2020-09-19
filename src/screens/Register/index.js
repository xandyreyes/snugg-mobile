import React, { useState } from 'react'
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	TouchableOpacity
} from 'react-native'
import { loginAPI, signUpAPI } from 'src/api/auth'
import Button from 'src/components/Button'
import Loading from 'src/components/Loading'
import {
	Center,
	Header,
	Input
} from 'src/components/styledComponents'
import { SubscriptionType, UserType } from 'src/constants'
import { Store } from 'src/store'
import images from './images'
import { 
	ButtonContainer,
	Container,
	Illustration,
	LoginContainer,
	LoginTextTouchable,
	RegisterAsContainer,
	TNC,
	Text
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
	const [loading, setLoading] = useState(false)

	const goBack = () => navigation.goBack()

	const signUp = async () => {
		if(
			info.first_name === '' || info.middle_name === '' || info.last_name === '' ||
			info.email === '' || info.contact_number === '' || info.password === ''
		) {
			Alert.alert('Fill up form', 'You need to fill in the form in order to proceed')
			return
		}

		if(info.password !== info.password_confirmation) {
			Alert.alert('Password Mismatch', 'Passwords you filled in don\'t match. Please try again')
			return
		}
  
		try {
			setLoading(true)
			if(info.user_type === UserType.broker) {
				info.subscription_type = SubscriptionType.trial
			}
			const response = await signUpAPI(info)
			if (response.data) {
				const { firstname, middlename, lastname, lat, lon, address, contact_number, device_id, email, type_id } = response.data
				const data = {
					firstname,
					middlename,
					lastname,
					lat,
					lon,
					address,
					device_id,
					email,
					type_id,
					contact_number: parseInt(contact_number)
				}
				Store.User.setData(data)
				Alert.alert(
					'Email Confirmation',
					response.message,
					[
						{
							text: 'OK',
							onPress: checkUserType
						}
					]  
				)
			} else {
				Alert.alert(
					'Something went wrong',
					response.message,
					[
						{
							text: 'OK'
						}
					]  
				)
			}
			setLoading(false)
		} catch (e) {
			setLoading(false)
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
  
	const checkUserType = async () => {
		try {
			// const data = {
			// 	email: info.email,
			// 	password: info.password
			// }
			// const loginRes = await loginAPI(data)
			// if (loginRes.accessToken) {
			// 	Store.User.setUser(loginRes)
			// }
			navigation.navigate(
				info.user_type === UserType.buyer
					? 'EnableLocation'
					: 'Capture'
			)
		} catch (err) {
			console.log(err, '[LOGIN AFTER SIGN UP ERROR]')
			Alert.alert(
				'Error', 
				err.response.data.message,
				[
					{
						text: 'OK'
					}
				]  
			)
		}
	}

	return(
		<SafeAreaView style={{ flex: 1 }}>
			{ loading && (
				<Loading />
			) }
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