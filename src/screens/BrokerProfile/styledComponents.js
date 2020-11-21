import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #F8F8F8;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 0px 0px 120px;
`

export const Row = styled.View`
  padding: 0px 19px;
`

export const RowNav = styled.View`
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

export const UserInfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0px 19px;
`

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  background: #c6c6c6;
  border-radius: 8px;
  elevation: 3;
`

export const UserInfoRow = styled.View`
  flex: 1;
  padding: 0px 15px;
`

export const UserInfoButtonsContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`

export const MessageIconReplacement = styled.TouchableOpacity`
  background: #17365D;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
`

export const CallIconReplacement = styled.TouchableOpacity`
  border: 1px solid #17365D;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
`

export const UserAddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 7px;
`

export const UserAddressIcon = styled.Image`
  width: 6.5px;
  height: 9.64px;
  resize-mode: contain;
  margin-right: 5.5px;
  tint-color: #767676;
`

export const UserAddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const UserBrokerStatus = styled.View`
  padding: 4px 12px;
  background: #E5E5E5;
  border-radius: 5px;
  align-self: flex-start;
  margin-bottom: 3px;
`

export const UserBrokerStatusLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 10px;
  line-height: 11px;
  color: #17365D;
`

/* TOGGLE SWITCH */
export const ToggleContainer = styled.View`
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    flex-direction: row;
    margin: 23px 0;
`

export const SelectedContainer = styled.View`
    border-radius: 8px;
    background: #17365D;
    padding: 12px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 38px;
    z-index: 1;
    position: absolute;
`

export const ButtonTouchable = styled.TouchableOpacity`
    padding: 12px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 38px;
    z-index: 2;
`

export const ToggleText = styled.Text`
    font-family: Raleway;
    font-size: 12px;
    color: ${p => p.selected ? 'white' : '#17365D'};
    text-align: center;
`

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`

/* SCREEN TOGGLE */
export const ScreenToggleContainer = styled.View`
  width: 50%;
`

/* OPTION MODAL */
export const ModalContainer = styled.View`
  background: #fff;
  border-radius: 15px;
`

export const ModalWidthBorderBottom = styled.View`
  border-color: #c6c6c6;
  border-bottom-width: 1px;
`

export const ModalButtons = styled.TouchableOpacity`
  padding: 20px 15px;
`

export const ModalButtonLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 15px;
  line-height: 16px;
  color: #17365D;
  text-align: center;
`