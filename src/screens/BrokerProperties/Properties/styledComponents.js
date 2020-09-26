import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const CardContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
  elevation: 3;
  margin: ${props => props.first ? '0' : '25'}px 25px 0px;
  background: #FFFFFF;
  position: relative; 
`

export const CardAbsoluteHeader = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  left: 0px;
  padding: 10px 13px 10px 10px;
  z-index: 1;
`

export const LikesWrapper = styled.View`
  background: #FFFFFF80;
  border-radius: 5px;
  padding: 5px 8px;
  flex-direction: row;
  align-items: center;
`

export const HeartIcon = styled.View`
  width: 15px;
  height: 15px;
  background: #EC7050;
  margin-right: 5px;
`

export const LikeLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #2E3743;
`

export const OptionButton = styled.TouchableOpacity``

export const OptionIcon = styled.View`
  background: #17365D;
  width: 8px;
  height: 22px;
`

export const CardImage = styled.Image`
  width: 100%;
  height: ${1.8*((width-50)/3)}px;
  resize-mode: cover;
`

export const CardContent = styled.View`
  padding: 15px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`

export const CardHeaderLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #17365D;
`

export const Verified = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background: #EC7050;
  margin-left: 10px;
`

export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const AddressIcon = styled.Image`
  width: 17px;
  height: 12px;
  resize-mode: contain;
  margin-right: 2px;
`

export const AddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const AdditionalInfo = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`

export const CardInfo = styled.View`
  padding: 5px 7px;
  background: #EC7050;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin: 3px 5px;
`

export const CardInfoIcon = styled.View`
  background: #FFFFFF;
  width: 8px;
  height: 8px;
  margin-right: 7px;
`

export const CardInfoLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 13px;
  color: #FFFFFF;
`