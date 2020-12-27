import React, { useEffect, useState } from 'react'
import { compact, find, size } from 'lodash'
import moment from 'moment'
import { Alert } from 'react-native'
import { getUserMessages } from 'src/api/user'
import { Store } from 'src/store'
import { onMessage } from 'src/utils/fcm'
import {
	ChatDate,
	ChatDetailsWrapper,
	ChatImage,
	ChatListingTitle,
	ChatMessage,
	ChatRecipient,
	ChatRecipientWrapper,
	ChatWrapper,
	Container,
	Header,
	NoMessagesText
} from './styledComponents'


const Messages = ({navigation}) => {

	const [messages, setMessages] = useState([])

	useEffect(() => {
		retrieveMessages()
		const fcm = onMessage(navigation, retrieveMessages)
		return fcm
	}, [])

	const retrieveMessages = async () => {
		try {
			const response = await getUserMessages()
			let listings = []
			const msgs = response.data.map(item => {
				const convo = find(listings, {user: Store.User.data.id === item.to.id ? item.from.id : item.to.id, listing: item.listing.id} )
				if (!convo) {
					listings.push({user: Store.User.data.id === item.to.id ? item.from.id : item.to.id, listing: item.listing.id})
					return item
				}
				return null
			})
			setMessages(compact(msgs))
		} catch (err) {
			console.log(err, '[ERR GETUSERMESSAGES]')
			Alert.alert(
				'Something went wrong!',
				'Unable to retrieve the list of messages',
				[
					{
						text: 'OK'
					}
				]
			)
		}
	}

	return (
		<Container>
			<Header>Messages</Header>
			{size(messages) > 0 ? messages.map(m =>
				<ChatWrapper
					key={m.id}
					unread={Store.User.data.id !== m.from.id && !m.seen}
					onPress={() => navigation.navigate('Conversation', { id: m.id })}>
					{ Store.User.data.id === m.to.id ? (
						<ChatImage source={{ uri: m.from.profile_image }} />
					) : (
						<ChatImage source={{ uri: m.to.profile_image }} />
					) }			
					<ChatDetailsWrapper>
						<ChatListingTitle numberOfLines={1}>{m.listing.name}</ChatListingTitle>
						<ChatRecipientWrapper>
							{ Store.User.data.id === m.to.id ? (<ChatRecipient>{m.from.firstname} {m.from.lastname}</ChatRecipient>) : (<ChatRecipient>{m.to.firstname} {m.to.lastname}</ChatRecipient>)}
							<ChatDate>{`• ${moment(m.created_at).format('MMM. DD - hh:mm A')}`}</ChatDate>
						</ChatRecipientWrapper>
						<ChatMessage>
							{m.message}
						</ChatMessage>
					</ChatDetailsWrapper>
				</ChatWrapper>  
			) : (
				<NoMessagesText>No Messages</NoMessagesText>
			)}
		</Container>
	)
}

export default Messages
