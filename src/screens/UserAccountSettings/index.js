import React, { useState } from 'react'
import { get } from 'lodash'
import { Alert } from 'react-native'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import {
	Container,
	ContentContainer,
	FormGroup,
	FormLabel,
	Header,
	Input,
	PRCID,
	PRCIDWrapper,
	Row,
	SaveChangesWrapper,
	Touchable,
	TouchableText,
	UpdatePRCButton,
	UpdatePRCLabel,
	UserImage
} from './styledComponents'
import { userUpdateAPI } from '../../api/auth'

const default_image = require('src/assets/images/default_image.png')

const UserAccountSettings = ({ navigation }) => {
  
	const { data } = Store.User
	const formData = {
		firstname: get(data, 'firstname', ''),
		middlename: get(data, 'middlename', ''),
		lastname: get(data, 'lastname', ''),
		address: get(data, 'address', 'Select Address'),
		contact_number: get(data, 'contact_number', null).toString(),
		email: get(data, 'email', ''),
		lat: get(data, 'lat', ''),
		lon: get(data, 'lon', ''),
		broker_details: get(data, 'broker_details', null)
	}
	const [form, setForm] = useState(formData)
	const [formToSend, setFormToSend] = useState({})
	const [updating, setUpdating] = useState(false)

	const onChangeText = field => text => {
		form[field] = text
		setForm({...form})
		checkFormToSend(field, text)
	}

	const checkFormToSend = (field, text) => {
		if(data[field]) {
			if(data[field].toString() === text) {
				delete formToSend[field]
				setFormToSend(formToSend)
			} else {
				formToSend[field] = text
				setFormToSend(formToSend)
			}
		}
	}
  
	const submitChanges = async () => {
		if(!updating && Object.entries(formToSend).length !== 0) {
			setUpdating(true)
			try {
				const res = await userUpdateAPI(data.id, formToSend)
				Store.User.update(res.data)
				setUpdating(false)
				Alert.alert('Success', res.message)
			} catch (error) {
				const {data} = error.response
				console.log('[ERROR SIGN UP]', data)
				const errData = Object.entries(data.errors).map(obj => {
					return obj[1].join('\n')
				})
				setUpdating(false)
				Alert.alert(data.message, errData.join('\n'))
			}
		}
	}

	const changeLocation = () => {
		navigation.navigate('SelectLocationMap', {
			title: 'Update Address',
			onNext: (nav, location) => {
				nav.goBack()
				const updateLocation = {
					...form,
					address: location.address,
					lat: location.latitude,
					lon: location.longitude
				}
				setForm(updateLocation)
				const formToSendUpdate = {
					...formToSend,
					address: location.address,
					lat: location.latitude,
					lon: location.longitude
				}
				setFormToSend(formToSendUpdate)
			}
		})
	}

	const saveImg = prc_id => {
		form.broker_details = {
			...form.broker_details,
			prc_id
		}
		formToSend.broker_details = {
			...formToSend.broker_details,
			prc_id
		}
		setForm({...form})
		setFormToSend({...formToSend})
	}

	return (
		<Container>
			<Row>
				<Back navigation={navigation} />
				<Header>User Profile Settings</Header>
			</Row>
			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserImage source={default_image} />
				<FormGroup>
					<FormLabel>First Name</FormLabel>
					<Input onChangeText={onChangeText(data.firstname)} value={form.firstname} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Middle Name</FormLabel>
					<Input onChangeText={onChangeText(data.middlename)} value={form.middlename} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Last Name</FormLabel>
					<Input onChangeText={onChangeText(data.lastname)} value={form.lastname} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Address</FormLabel>
					<Touchable onPress={changeLocation}>
						<TouchableText>{form.address}</TouchableText>
					</Touchable>
				</FormGroup>
				<FormGroup>
					<FormLabel>Phone Number</FormLabel>
					<Input onChangeText={onChangeText(data.contact_number)} value={form.contact_number} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Email</FormLabel>
					<Input onChangeText={onChangeText(data.email)} value={form.email} />
				</FormGroup>
				{ data.type_id === UserType.broker && (
					<>
						<FormGroup>
							<FormLabel>PRC ID</FormLabel>
							{ get(form, 'broker_details.prc_id', null) ? (
								<PRCIDWrapper source={{ uri: form.broker_details.prc_id }} />
							) : (
								<PRCID>
									<TouchableText>No PRC ID</TouchableText>
								</PRCID>
							) }
						</FormGroup>
						<UpdatePRCButton onPress={() => navigation.navigate('Capture', { saveImg })}>
							<UpdatePRCLabel>Update PRC ID</UpdatePRCLabel>
						</UpdatePRCButton>
					</>
				) }
				<SaveChangesWrapper>
					<Button
						disabled={updating}
						text={'SAVE CHANGES'}
						width={168}
						onPress={submitChanges} />
				</SaveChangesWrapper>
			</ContentContainer>
		</Container>
	)
}

export default UserAccountSettings