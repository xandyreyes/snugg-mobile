import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 20px 25px 120px;
`

export const UserInfoContainer = styled.View`
  align-items: center;
  padding-bottom: 38px;
`

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  background: #c6c6c6;
  border-radius: 8px;
  background: rgba(0,0,0,0.1);
`

export const UserNameLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 20px;
  color: #17365D;
  text-align: center;
  margin: 12px 0px 0px;
`

export const UserAddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
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
  color: #767676;
  text-align: center;
`

export const UserSubscriptionWrapper = styled.View`
  background: #17365D;
  border-radius: 5px;
  padding: 6px 15px;
  align-items: center;
`

export const UserSubscriptionLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`

export const ButtonContainer = styled.View`
  margin-bottom: 44px;
`

export const Button = styled.TouchableOpacity`
  padding: 12px 18px;
  background-color: #ffffff;
  border: 1px solid #70707026;
  border-radius: 5px;
  margin-bottom: 12px;
`

export const ButtonLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 14px;
  line-height: 16px;
  color: #2E3743;
  text-align: left;
`