import styled from 'styled-components'

export const Container = styled.View`
  background: #FFFFFF;
  flex-direction: column;
  flex: 1;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 0.3px;
  border-bottom-color: #707070;
`

export const HeaderWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const HeaderRecipientName = styled.Text`
  font-family: Raleway-Bold;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #17365D;
`

export const HeaderRecipientType = styled.Text`
  font-family: Raleway-Italic;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const HeaderBurgerMenu = styled.Image`
  width: 23px;
	height: 20px;
	resize-mode: contain;
  tint-color: #767676;
`

export const ListingWrapper = styled.View`
  background: #F2F2F2;
  padding: 12.23px 29px 14.77px;
  flex-direction: row;
  align-items: stretch;
`

export const ListingImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  resize-mode: cover;
  overflow: hidden;
`

export const ListingInfoWrapper = styled.View`
  margin-left: 9px;
`

export const ListingName = styled.Text`
  font-family: Raleway-Bold;
  font-size: 16px;
  line-height: 19px;
	color: #17365D;
	max-width: 240px;
`

export const ListingAddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 6px;
`

export const AddressIcon = styled.Image`
  width: 6.5px;
  height: 9.64px;
  resize-mode: contain;
  margin-right: 5.5px;
  tint-color: #767676;
`

export const AddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
	color: #767676;
	max-width: 200px;
`

export const ListingAdditionalInfo = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`

export const CardInfo = styled.View`
  padding: 3px 7px;
  background: #EC7050;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 7px;
`

export const CardInfoIcon = styled.Image`
  width: 9px;
  height: 9px;
  margin-right: 5px;
  resize-mode: contain;
`

export const CardInfoLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 13px;
  color: #FFFFFF;
`

export const ListingPrice = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const ConversationContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const ConversationWrapper = styled.FlatList`
  background: #FFFFFF;
	flex-grow: 0;
`

export const MessageWrapper = styled.View`
  align-items: ${props => props.me ? 'flex-end' : 'flex-start'};
  margin: ${props => props.bigMargin ? '15' : '5'}px 18px;
`

export const MessageDateTime = styled.Text`
  font-family: Raleway-Italic;
  font-size: 10px;
  line-height: 11px;
  color: #767676;
`

export const MessageBubble = styled.View`
  background: ${props => props.me ? '#17365D' : '#EAEAEA'};
  padding: 6px 8px 6px 10px;
  border-radius: 10px;
  margin-top: 5px;
  max-width: 60%;
`

export const MessageLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.me ? '#FFFFFF' : '#2E3743'};
`

export const InputFieldContainer = styled.View`
  padding: 17px 27px;
  background: #FFFFFF;
  border-top-width: 0.3px;
  border-top-color: #707070;
`

export const InputFieldWrapper = styled.View`
  border-radius: 20px;
  border-width: 0.5px;
  border-color: #707070;
  flex-direction: row;
  align-items: center;
  padding: 11px 16px;
`

export const Input = styled.TextInput`
  border: 0px;
  padding: 0px;
  margin: 0px;
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  flex: 1;
  height: 14px;
  padding-right: 15px;
`

export const InputFieldSend = styled.TouchableOpacity``

export const InputFieldSendLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`