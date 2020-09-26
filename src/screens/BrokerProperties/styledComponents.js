import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #F8F8F8;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 20px 0px 120px;
`

export const Row = styled.View`
  padding: 0px 25px;
`

export const UserInfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0px 25px;
`

export const UserImage = styled.View`
  width: 90px;
  height: 90px;
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
  margin: 7px 0px;
`

export const CallIconReplacement = styled.TouchableOpacity`
  border: 1px solid #17365D;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin: 7px 0px;
`

export const UserAddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 7px;
`

export const UserAddressIcon = styled.Image`
  width: 17px;
  height: 12px;
  resize-mode: contain;
  margin-right: 2px;
`

export const UserAddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const UserBrokerStatus = styled.View`
  padding: 5px 15px;
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
    margin: 24px 0;
`

export const SelectedContainer = styled.View`
    border-radius: 8px;
    background: #17365D;
    padding: 13px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 45px;
    z-index: 1;
    position: absolute;
`

export const ButtonTouchable = styled.TouchableOpacity`
    padding: 13px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 45px;
    z-index: 2;
`

export const ToggleText = styled.Text`
    font-family: Raleway;
    font-size: 14px;
    color: ${p => p.selected ? 'white' : '#17365D'};
    text-align: center;
`

/* SCREEN TOGGLE */
export const ScreenToggleContainer = styled.View`
  width: 50%;
`