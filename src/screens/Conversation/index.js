import React, {useEffect, useRef, useState} from 'react'
import moment from 'moment'
import { Alert } from 'react-native'
import { sendFCM } from 'src/api/fcm'
import { getUserMessagesListing, sendNewMessage } from 'src/api/user'
import Back from 'src/components/Back'
import Loading from 'src/components/Loading'
import { Store } from 'src/store'
import { onMessage } from 'src/utils/fcm'
import ListingInfo from './ListingInfo'
import {
	Container,
	ConversationContainer,
	ConversationWrapper,
	HeaderBurgerMenu,
	HeaderRecipientName,
	HeaderRecipientType,
	HeaderWrapper,
	Input,
	InputFieldContainer,
	InputFieldSend,
	InputFieldSendLabel,
	InputFieldWrapper,
	MessageBubble,
	MessageDateTime,
	MessageLabel,
	MessageWrapper,
	Row
} from './styledComponents'

const Conversation = ({navigation, route}) => {

	const [messageToSend, setMessageToSend] = useState('')
	const [conversation, setConversation] = useState([])
	const [loading, setLoading] = useState(false)
	const [sending, setSending] = useState(true)
	const listViewRef = useRef(null)

	useEffect(() => {
		setLoading(true)
		getConvos()
		const fcm = onMessage(navigation, getConvos)
		return fcm
	}, [])

	const getConvos = async () => {
		try {
			const response = await getUserMessagesListing(route.params.id)
			setConversation(response.data)
		} catch (err) {
			console.log(err.response, '[ERR GETMESSAGELISTING]')
			Alert.alert(
				'Something went wrong!',
				'Unable to retrieve messages',
				[
					{
						text: 'OK'
					}
				]
			)
		}
		setSending(false)
		setLoading(false)
	}

	const sendMessage = async () => {
		if(messageToSend.replace(/\s+/g,'') !== '' && !sending) {
			setSending(true)
			try {
				const dataToPush = {
					from_id: Store.User.data.id,
					to_id: Store.User.data.id === conversation[0].to.id ? conversation[0].from.id : conversation[0].to.id,
					listing_id: conversation[0].listing.id,
					message: messageToSend
				}
				const response = await sendNewMessage(dataToPush)
				setConversation([...conversation, response.data])
				setMessageToSend('')
				listViewScrollToBottom()
				sendNotif({
					message: messageToSend,
					user: Store.User.data.id === conversation[0].to.id ? conversation[0].from : conversation[0].to,
					data: response.data
				})
			} catch (err) {
				console.log(err.response, '[ERR SEND MESSAGE]')
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
			setSending(false)
		}
	}

	const sendNotif = (message, user, data) => {
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

	const listViewScrollToBottom = () => listViewRef.current.scrollToEnd({animated: true})

	const renderItem = ({item, index}) => {
		return (
			<MessageWrapper me={Store.User.data.id === item.from.id} bigMargin={index === 0 || index === conversation.length - 1}>
				<MessageDateTime>{moment(item.created_at).format('MMM. DD - hh:mm A')}</MessageDateTime>
				<MessageBubble me={Store.User.data.id === item.from.id}>
					<MessageLabel me={Store.User.data.id === item.from.id}>
						{item.message}
					</MessageLabel>
				</MessageBubble>
			</MessageWrapper>
		)
	}

	if (loading) {
		return <Loading />
	}

	return (
		<Container>
			{ conversation.length > 0 ? (
				<>
					<Row>
						<Back navigation={navigation} />
						<HeaderWrapper>
							{ Store.User.data.id === conversation[0].to.id ? (
								<HeaderRecipientName>{conversation[0].from.firstname} {conversation[0].from.lastname}</HeaderRecipientName>
							) : (<HeaderRecipientName>{conversation[0].to.firstname} {conversation[0].to.lastname}</HeaderRecipientName>) }
							
							<HeaderRecipientType>Broker</HeaderRecipientType>
						</HeaderWrapper>
						<HeaderBurgerMenu />
					</Row>
					<ListingInfo data={conversation[0].listing}/>
				</>
			) : null }
			<ConversationContainer>
				<ConversationWrapper
					ref={listViewRef}
					data={conversation}
					renderItem={renderItem}
					maintainVisibleContentPosition={{minIndexForVisible: 0}} />
			</ConversationContainer>
			<InputFieldContainer>
				<InputFieldWrapper>
					<Input
						value={messageToSend}
						onChangeText={mes => setMessageToSend(mes)}
						onSubmitEditing={sendMessage}
						placeholder="Message" />
					<InputFieldSend onPress={sendMessage}>
						<InputFieldSendLabel>SEND</InputFieldSendLabel>
					</InputFieldSend>
				</InputFieldWrapper>
			</InputFieldContainer>
		</Container>
	)
}

export default Conversation
