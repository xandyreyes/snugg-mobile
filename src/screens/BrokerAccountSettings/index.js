import React, { useState } from 'react'
import {
	Container,
	ContentContainer,
	FormGroup,
	FormLabel,
	Input,
	PRCIDWrapper,
	SaveChangesWrapper,
	UpdatePRCButton,
	UpdatePRCLabel,
	UserImage
} from './styledComponents'
import Button from 'src/components/Button'
import { Store } from 'src/store'
  
const formDataset = [
	{
		field: 'fullname',
		label: 'Full Name'
	}, {
		field: 'middlename',
		label: 'Middle Name'
	}, {
		field: 'lastname',
		label: 'Last Name'
	}, {
		field: 'location',
		label: 'Location'
	}, {
		field: 'contact_number',
		label: 'Phone Number'
	}, {
		field: 'email',
		label: 'Email'
	}
]

const BrokerAccountSettings = ({ navigation }) => {
  
  const { data } = Store.User;
  console.log(data)
	const formData = {
		fullname: data.firstname,
		middlename: data.middlename,
		lastname: data.lastname,
		location: data.address,
		contact_number: data.contact_number.toString(),
		email: data.email,
		prc_id: ''
	}
	const [form, setForm] = useState(formData)

	const onChangeText = field => text => {
		form[field] = text
		setForm({...form})
  }
  
  const submitChanges = () => {
    
  }

	return (
		<Container>
			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserImage />
				{formDataset.map((data, index) =>
					<FormGroup key={index}>
						<FormLabel>{data.label}</FormLabel>
						<Input onChangeText={onChangeText(data.field)} value={form[data.field]} />
					</FormGroup>
				)}
				<FormGroup>
					<FormLabel>PRC ID</FormLabel>
					<PRCIDWrapper />
				</FormGroup>
				<UpdatePRCButton>
					<UpdatePRCLabel>Update PRC ID</UpdatePRCLabel>
				</UpdatePRCButton>
				<SaveChangesWrapper>
					<Button text={'SAVE CHANGES'} width={168} onPress={submitChanges} />
				</SaveChangesWrapper>
			</ContentContainer>
		</Container>
	)
}

export default BrokerAccountSettings