import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { loginAPI } from 'src/api/auth'
import Button from 'src/components/Button'
import Loading from 'src/components/Loading'
import { Header, Input } from 'src/components/styledComponents'
import { Store } from 'src/store'
import images from './images'
import {
	Center,
	Container,
	HouseIllustration,
	Illustrations,
	LoginContainer,
	Logo,
	Text,
	TextHighlight
} from './styledComponents'

export default ({ navigation }) => {

	const initialData = {
		email: '',
		password: '',
	}

	const [data, setData] = useState(initialData)
	const [loading, setLoading] = useState(false)

	const login = async () => {
		if (data.email === '' || data.password === '') {
			Alert.alert(
				'Both fields are required!',
				'Please input all required data to continue.'
			)
			return
		}
		setLoading(true)
		try {
			const res = await loginAPI(data)
			setLoading(false)
			if (res.access_token) {
				Store.User.setUser(res)
				navigation.navigate('EnableLocation')
			}
		} catch (error) {
			setLoading(false)
			if (!error.response) {
				Alert.alert(
					'Network Error',
					'Something went wrong.'
				)
			} else {
				const code = error.response.status
				if (code === 401) {
					Alert.alert(
						'Unable to login',
						'Please make sure your login information are correct.'
					)
				}
			}
		}
	}

	const changeText = (field, value) => {
		data[field] = value
		setData(data)
	}

	return(
		<KeyboardAvoidingView 
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
			flex={1}
		>
			{ loading && (<Loading />) }
			<Container>
				<Illustrations>
					<Logo source={images.logo} />
					<HouseIllustration source={images.login}/>
				</Illustrations>
				<LoginContainer>
					<Header>Login</Header>
					<Input autoCapitalize="none" placeholder="Email" onChangeText={text => changeText('email', text)}/>
					<Input autoCapitalize="none" placeholder="Password" secureTextEntry={true} onChangeText={text => changeText('password', text)} />
					<Center>
						<TouchableOpacity style={{ marginVertical: 22 }} onPress={() => navigation.navigate('ForgotPassword')}>
							<Text>Forgot Password?</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('BrokerProfile')}>
							<Text>Broker Profile</Text>
						</TouchableOpacity>
					</Center>
					<Center>
						<Button text={'LOGIN'} width={168} onPress={login} />
					</Center>
					<Center style={{ marginVertical: 22 }}>
						<Text>Don&apos;t have an account yet?</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Register')}>
							<TextHighlight>Sign Up</TextHighlight>
						</TouchableOpacity>
					</Center>
				</LoginContainer>
			</Container>
		</KeyboardAvoidingView>
	)
}