import styled from 'styled-components'

export const Container = styled.ScrollView`
  background: #FFFFFF;
`

export const Header = styled.Text`
  font-family: Raleway-Bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #17365D;
  margin: 17px 21px;
`

export const ChatWrapper = styled.TouchableOpacity`
  background: ${props => props.unread ? '#17365D24' : '#FFFFFF24'};
  border-width: 0.3px;
  border-color: #707070;
  flex-direction: row;
  align-items: stretch;
  padding: 12px 21px;
`

export const ChatImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  resize-mode: cover;
`

export const ChatDetailsWrapper = styled.View`
  flex: 1;
  padding-left: 13px;
  padding-right: 30px;
`
export const ChatListingTitle = styled.Text`
  font-family: Raleway-Bold;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #17365D;
`

export const ChatRecipientWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ChatRecipient = styled.Text`
  font-family: Raleway-Regular;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const ChatDate = styled.Text`
  font-family: Raleway-Italic;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const ChatMessage = styled.Text`
  font-family: Raleway-Regular;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`