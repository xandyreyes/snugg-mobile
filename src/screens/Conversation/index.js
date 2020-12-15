import React, {useState, useEffect, useRef} from 'react'
import {
  Container,
  Row,
  HeaderWrapper,
  HeaderRecipientName,
  HeaderRecipientType,
  HeaderBurgerMenu,
  ConversationContainer,
  ConversationWrapper,
  InputFieldWrapper,
  InputFieldContainer,
  InputFieldSend,
  InputFieldSendLabel,
  Input,
  MessageWrapper,
  MessageDateTime,
  MessageBubble,
  MessageLabel
} from './styledComponents'
import Back from 'src/components/Back'
import ListingInfo from './ListingInfo'

const convo = [
  {
    id: 1,
    me: true,
    date: 'Jul 15. 3:00PM',
    message: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Pellentesque velit orci.'
  }, {
    id: 2,
    me: false,
    date: 'Jul 15. 3:00PM',
    message: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Pellentesque velit orci.'
  }, {
    id: 3,
    me: true,
    date: 'Jul 15. 3:00PM',
    message: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Pellentesque velit orci.'
  }
]

const Conversation = ({navigation}) => {

  const [messageToSend, setMessageToSend] = useState('')
  const [conversation, setConversation] = useState([])
  const [loading, setLoading] = useState(false)
  const listViewRef = useRef(null)

  useEffect(() => {
    getConvos()
  }, [])

  const getConvos = () => {
    setLoading(true)
    setConversation(convo)
    setLoading(false)
  }

  const sendMessage = () => {
    if(messageToSend) {
      const dataToPush = {
        id: conversation.length + 1,
        me: true,
        date: 'Jul 15. 3:00PM',
        message: messageToSend
      };
      setConversation([...conversation, dataToPush])
      setMessageToSend('')
      listViewScrollToBottom()
    }
  }

  const listViewScrollToBottom = () => listViewRef.current.scrollToEnd({animated: true})

  const renderItem = ({item, index}) => {
    return (
      <MessageWrapper me={item.me} bigMargin={index === 0 || index === conversation.length - 1}>
        <MessageDateTime>{item.date}</MessageDateTime>
        <MessageBubble me={item.me}>
          <MessageLabel me={item.me}>
            {item.message}
          </MessageLabel>
        </MessageBubble>
      </MessageWrapper>
    )
  }

  return (
    <Container>
      <Row>
        <Back navigation={navigation} />
        <HeaderWrapper>
          <HeaderRecipientName>John Doe</HeaderRecipientName>
          <HeaderRecipientType>Broker</HeaderRecipientType>
        </HeaderWrapper>
        <HeaderBurgerMenu />
      </Row>

      <ListingInfo />

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
