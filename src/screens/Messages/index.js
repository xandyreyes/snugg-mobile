import React from 'react'
import {
  Header,
  ChatWrapper,
  ChatDetailsWrapper,
  ChatImage,
  ChatRecipientWrapper,
  ChatRecipient,
  ChatDate,
  ChatMessage,
  ChatListingTitle,
  Container
} from './styledComponents'

const listingImagePlaceholder = require('src/assets/images/property-1.jpg');

const messages = [
  {
    id: 1,
    image: listingImagePlaceholder,
    listingTitle: '2 BR condo with Balcony in Trionity lorem ipsum dolor sit amet',
    recipient: 'John Doe',
    date: 'Jan 4',
    message: 'Lorem ipsum dolor sit amet',
    unread: true
  }, {
    id: 2,
    image: listingImagePlaceholder,
    listingTitle: '2 BR condo with Balcony in Trionity lorem ipsum dolor sit amet',
    recipient: 'John Doe',
    date: 'Jan 4',
    message: 'Lorem ipsum dolor sit amet',
    unread: false
  }, {
    id: 3,
    image: listingImagePlaceholder,
    listingTitle: '2 BR condo with Balcony in Trionity lorem ipsum dolor sit amet',
    recipient: 'John Doe',
    date: 'Jan 4',
    message: 'Lorem ipsum dolor sit amet',
    unread: false
  }
]

const Messages = ({navigation}) => {
	return (
    <Container>
      <Header>Messages</Header>

      {messages.map(m =>
        <ChatWrapper
          key={m.id}
          unread={m.unread}
          onPress={() => navigation.navigate('Conversation')}>
          <ChatImage source={m.image} />

          <ChatDetailsWrapper>
            <ChatListingTitle numberOfLines={1}>{m.listingTitle}</ChatListingTitle>
            <ChatRecipientWrapper>
              <ChatRecipient>{m.recipient}</ChatRecipient>
              <ChatDate>{`• ${m.date}`}</ChatDate>
            </ChatRecipientWrapper>

            <ChatMessage>
              {m.message}
            </ChatMessage>
          </ChatDetailsWrapper>
        </ChatWrapper>  
      )}
    </Container>
	)
}

export default Messages
