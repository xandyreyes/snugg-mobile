import React, { useMemo, useState } from 'react'
import { Alert } from 'react-native'
import { sendFCM } from 'src/api/fcm'
import { sendNewMessage } from 'src/api/user'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import TextInput from 'src/components/TextInput'
import {
	Header,
	Modal
} from 'src/components/styledComponents'
import { Store } from 'src/store'
import images from './images'
import { 
	BackContainer,
	Container,
	ContentContainer,
	Heading2,
	MatchIllustration,
	ModalContainer,
	SafeAreaView,
	Text
} from './styledComponents'

export default ({ route, navigation }) => {

	const { name, user, listing } = route.params
	const userInfo = useMemo(() => typeof user === 'string' ? JSON.parse(user) : user, [user])
	const listingInfo = useMemo(() => typeof listing === 'string' ? JSON.parse(listing) : listing, [listing])
	const [textValue, setText] = useState('')


	const goToUserMessage = async () => {
		try {
			const dataToPush = {
				from_id: Store.User.data.id,
				to_id: userInfo.id,
				listing_id: listingInfo.id,
				message: textValue
			}
			const response = await sendNewMessage(dataToPush)
			sendNotif({
				message: textValue,
				user: userInfo,
				data: response.data
			})
			navigation.navigate('Conversation', { id: response.data.listing.id, userId: userInfo.id })
		} catch (err) {
			console.log(err, '[ERR SEND MESSAGE]')
			Alert.alert(
				'Something went wrong!',
				'Unable to send the message',
				[
					{
						text: 'OK'
					}
				]
			)
		}
	}

	const sendNotif = ({message, user, data}) => {
		const body = {
			to: user.device_id,
			notification: {
				body: message,
				title: `${user.firstname} ${user.lastname}`
			},
			data: {
				data: {
					type: 'messageReceived',
					data
				},
			},
			priority: 'high'
		}
		sendFCM(body)
	}

	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
			<SafeAreaView>
				<BackContainer>
					<Back navigation={navigation} color={'white'} />
				</BackContainer>
				<ModalContainer>
					<Modal>
						<ContentContainer>
							<Header>{'It\'s a Match!'}</Header>
							<Heading2>{`You matched with ${userInfo.firstname || name}!`}</Heading2>
							<MatchIllustration source={images.match} />
							<Text>{`Send ${userInfo.firstname || name} a message to start a deal.`}</Text>
							<TextInput placeholder={`Hi ${userInfo.firstname || name}`} onChangeText={(text) => setText(text)} value={textValue}/>
							<Button text="SEND MESSAGE" width={180} onPress={goToUserMessage}/>
						</ContentContainer>
					</Modal>
				</ModalContainer>
			</SafeAreaView>
		</Container>
	)
}