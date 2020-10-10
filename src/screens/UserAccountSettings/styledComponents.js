import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 5px 25px 120px;
`

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  background: rgba(0,0,0,0.1);
  border-radius: 8px;
  elevation: 3;
  margin: 15px 0px;
  align-self: center;
`

export const FormGroup = styled.View`
  margin-top: 15px;
`

export const FormLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 13px;
  line-height: 15px;
  color: #17365D;
`

export const Input = styled.TextInput`
  padding: 8px 15px;
  background-color: #ffffff;
  border: 1px solid #70707026;
  border-radius: 8px;
  font-family: Raleway-Regular;
  font-size: 14px;
  line-height: 16px;
  color: #2E3743;
  margin-top: 5px;
`

export const Touchable = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: #ffffff;
  border: 1px solid #70707026;
  border-radius: 8px;
  margin-top: 5px;
`

export const TouchableText = styled.Text`
  font-family: Raleway-Regular;
  font-size: 14px;
  color: #2E3743;
  line-height: 16px;
`

export const PRCIDWrapper = styled.Image`
  background: #E6E6E6;
  width: 100%;
  height: 200px;
  margin-top: 8px;
  resize-mode: contain;
`

export const PRCID = styled.View`
  width: 100%;
  height: 150px;
  margin-top: 8px;
  resize-mode: contain;
  border: 1px solid #70707026;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const UpdatePRCButton = styled.TouchableOpacity`
  background: #17365D;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  margin-top: 14px;
`

export const UpdatePRCLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`

export const SaveChangesWrapper = styled.View`
  align-items: center;
  padding: 40px 0px;
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