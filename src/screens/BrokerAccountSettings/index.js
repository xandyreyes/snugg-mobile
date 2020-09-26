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

const BrokerAccountSettings = () => {
	const formData = {
		fullname: 'John Doe',
		middlename: 'Augustus',
		lastname: 'Doe',
		location: 'Greenhills, San Juan City',
		contact_number: '0917XXXXXXX',
		email: 'johndoe@example.com',
		prc_id: ''
	}

	const [form, setForm] = useState(formData)

	const onChangeText = field => text => {
		form[field] = text
		setForm(form)
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
					<Button text={'SAVE CHANGES'} width={168} onPress={() => {}} />
				</SaveChangesWrapper>
			</ContentContainer>
		</Container>
	)
}

export default BrokerAccountSettings