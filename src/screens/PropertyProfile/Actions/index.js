import React from 'react'
import {
  Wrapper,
  CloseButton,
  ChatButton,
  HeartButton,
  CloseIcon,
  ChatIcon,
  HeartIcon
} from './styledComponents'

const Actions = () => {

  const closeButtonOnPress = () => {

  }

  const chatButtonOnPress = () => {

  }

  const heartButtonOnPress = () => {

  }

  return (
    <Wrapper>
      <CloseButton onPress={closeButtonOnPress}>
        <CloseIcon />
      </CloseButton>
      <ChatButton onPress={chatButtonOnPress}>
        <ChatIcon />
      </ChatButton>
      <HeartButton onPress={heartButtonOnPress}>
        <HeartIcon />
      </HeartButton>
    </Wrapper>
  )
}

export default Actions
