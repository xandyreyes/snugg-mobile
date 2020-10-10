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
import { Alert } from 'react-native'
import Button from 'src/components/Button'
import { Store } from 'src/store'
import { userUpdateAPI } from '../../api/auth'
  
const formDataset = [
	{
		field: 'firstname',
		label: 'First Name'
	}, {
		field: 'middlename',
		label: 'Middle Name'
	}, {
		field: 'lastname',
		label: 'Last Name'
	}, {
		field: 'address',
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
	const formData = {
		firstname: data.firstname,
		middlename: data.middlename,
		lastname: data.lastname,
		address: data.address,
		contact_number: data.contact_number.toString(),
		email: data.email
	}
  const [form, setForm] = useState(formData)
  const [formToSend, setFormToSend] = useState({})
  const [prcId, setPrcId] = useState('')
  const [updating, setUpdating] = useState(false)

	const onChangeText = field => text => {
		form[field] = text
    setForm({...form})
    checkFormToSend(field, text)
  }

  const checkFormToSend = (field, text) => {
    if(data[field]) {
      if(data[field].toString() === text) {
        delete formToSend[field];
        setFormToSend(formToSend)
      } else {
        formToSend[field] = text;
        setFormToSend(formToSend)
      }
    }
  }
  
  const submitChanges = async () => {
    if(!updating && Object.entries(formToSend).length !== 0) {
      setUpdating(true)
      try {
        const res = await userUpdateAPI(data.id, formToSend)
        Store.User.update(res.data);
        setUpdating(false);
        Alert.alert('Success', res.message);
      } catch (error) {
        const {data} = error.response;
        console.log('[ERROR SIGN UP]', data)
        const errData = Object.entries(data.errors).map(obj => {
          return obj[1].join('\n')
        })
        setUpdating(false)
        Alert.alert(data.message, errData.join('\n'))
      }
    }
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

export default BrokerAccountSettings