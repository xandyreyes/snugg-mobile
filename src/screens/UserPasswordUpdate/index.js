import React, { useState } from 'react'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
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
		currentPassword: '',
		newPassword: '',
		confirmPassword: ''
	})

	const onChangeText = (text, field) => {
		data[field] = text
		setData({...data})
	}

	const savePassword = () => {
		console.log('Save Password')
	}

	return(
		<Container>
			<Row>
				<Back navigation={navigation} />
				<Header>Change Password</Header>
			</Row>
			<Form>
				<TextInput label="Current Password" value={data.currentPassword} onChangeText={text => onChangeText(text, 'currentPassword')} secureTextEntry={true} />
				<TextInput label="New Password" value={data.newPassword} onChangeText={text => onChangeText(text, 'newPassword')} secureTextEntry={true} />
				<TextInput label="Confirm Password" value={data.confirmPassword} onChangeText={text => onChangeText(text, 'confirmPassword')} secureTextEntry={true} />
				<ButtonContainer>
					<Button text="SAVE PASSWORD" onPress={savePassword} width={171} />
				</ButtonContainer>
			</Form>
		</Container>
	)
}