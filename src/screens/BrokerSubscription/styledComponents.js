import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
    background: white;
    flex: 1;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`

export const Header = styled.Text`
  color: #17365D;
  font-size: 16px;
  font-family: Raleway-Bold;
  width: ${Dimensions.get('screen').width}px;
  position: absolute;
  text-align: center;
  z-index: -1;
`

export const Form = styled.View`
  flex: 1;
  padding: 67px;
  justify-content: center;
`

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 30px;
  margin-bottom: 16px;
`
export const SubscriptionImage = styled.Image`
  height: 185px;
  width:100%;
`

export const SubscriptionHeaderText = styled.Text`
  color: #17365D;
  font-size: 24px;
  font-family: Raleway-Bold;
  text-align: center;
  margin-top: 26px;
  margin-bottom:7px;
`

export const SubscriptionDetailsText = styled.Text`
  color: #2E3743;
  font-size: 12px;
  font-family: Raleway-Regular;
  text-align: center;
  margin-bottom:4px;
`

export const ModalContainer = styled.View`
  background: #fff;
  border-radius: 15px;
  padding:30px;
`

export const ModalButtonHeader = styled.Text`
  font-family: Raleway-Bold;
  font-size: 20px;
  line-height: 24px;
  color: #17365D;
  text-align: center;
  margin-bottom:10px;
`
export const ModalButtonLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #2E3743;
  text-align: center;
`