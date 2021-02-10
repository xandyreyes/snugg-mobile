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

const menu = require('src/assets/images/menu.png')

const Conversation = ({navigation, route}) => {

	const [messageToSend, setMessageToSend] = useState('')
	const [conversation, setConversation] = useState([])
	const [loading, setLoading] = useState(false)
	const [sending, setSending] = useState(true)
	const listViewRef = useRef(null)
	const { broker, listing, userId } = route.params

	useEffect(() => {
		setLoading(true)
		getConvos()
		const fcm = onMessage(navigation, newMessage)
		return fcm
	}, [])

	useEffect(() => {
		if (listViewRef?.current?.scrollToEnd) {
			setTimeout(() => {
				listViewScrollToBottom()
			}, 1000)
		}
	}, [conversation])

	const newMessage = () => {
		getConvos()
	}

	console.log({ listingId:route.params.id, userId })

	const getConvos = async () => {
		try {
			const response = await getUserMessagesListing(route.params.id, userId)
			setConversation(response.data)
		} catch (err) {
			console.log(err.response.data, '[ERR GETMESSAGELISTING]')
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
					to_id: broker ? broker.id : Store.User.data.id === conversation[0].to.id ? conversation[0].from.id : conversation[0].to.id,
					listing_id: listing ? listing.id : conversation[0].listing.id,
					message: messageToSend
				}
				const response = await sendNewMessage(dataToPush)
				setConversation([...conversation, response.data])
				setMessageToSend('')
				sendNotif({
					message: messageToSend,
					user: response.data.to,
					data: response.data
				})
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
			setSending(false)
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

	const listViewScrollToBottom = () => listViewRef?.current?.scrollToEnd({ animated: true })

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
							{/* <HeaderRecipientType>Broker</HeaderRecipientType> */}
						</HeaderWrapper>
						<HeaderBurgerMenu source={menu} />
					</Row>
					<ListingInfo data={conversation[0].listing}/>
				</>
			) : (
				<>
					<Row>
						<Back navigation={navigation} />
						<HeaderWrapper>
							{ broker ? (<HeaderRecipientName>{broker.firstname} {broker.lastname}</HeaderRecipientName>) : null }
						</HeaderWrapper>
						<HeaderBurgerMenu source={menu} />
					</Row>
					{ listing ? <ListingInfo data={listing}/> : null}
				</>
			) }
			<ConversationContainer>
				<ConversationWrapper
					onLayout={() => listViewRef.current.scrollToEnd({animated: true})}
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
