import React, { useState } from 'react'
import { get } from 'lodash'
import { Alert } from 'react-native'
import { changePasswordAPI } from 'src/api/auth'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import Loading from 'src/components/Loading'
import TextInput from 'src/components/TextInput'
import {
	ButtonContainer,
	Container,
	Form,
	Header,
	Row
} from './styledComponents'

export default ({ navigation }) => {

	const [data, setData] = useState({
		old_password: '',
		password: '',
		password_confirmation: ''
	})
	const [loading, isLoading] = useState(false)

	const onChangeText = (text, field) => {
		data[field] = text
		setData({...data})
	}

	const savePassword = async () => {
		if (data.old_password === '' || data.password === '' || data.password_confirmation === '' ) {
			Alert.alert(
				'All fields are required!',
				'Please add data to all fields to continue.',
				[
					{
						text: 'OK'
					}
				]
			)
			return
		}
		isLoading(true)
		try {
			const passwordChange = await changePasswordAPI(data)
			isLoading(false)
			Alert.alert(
				'Password changed!',
				passwordChange.message,
				[
					{
						text: 'OK'
					}
				]
			)
		} catch (err) {
			isLoading(false)
			console.log(err.response, '[ERR SAVE NEW PASSWORD]')
			Alert.alert(
				'Something went wrong!',
				get(err, 'response.data.message', 'Unable to change password'),
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
			{ loading && <Loading /> }
			<Row>
				<Back navigation={navigation} />
				<Header>Change Password</Header>
			</Row>
			<Form>
				<TextInput label="Current Password" value={data.old_password} onChangeText={text => onChangeText(text, 'old_password')} secureTextEntry={true} />
				<TextInput label="New Password" value={data.password} onChangeText={text => onChangeText(text, 'password')} secureTextEntry={true} />
				<TextInput label="Confirm Password" value={data.password_confirmation} onChangeText={text => onChangeText(text, 'password_confirmation')} secureTextEntry={true} />
				<ButtonContainer>
					<Button text="SAVE PASSWORD" onPress={savePassword} width={171} />
				</ButtonContainer>
			</Form>
		</Container>
	)
}