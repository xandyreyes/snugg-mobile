import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 20px 25px 120px;
`

export const UserImage = styled.View`
  width: 90px;
  height: 90px;
  background: #c6c6c6;
  border-radius: 8px;
  elevation: 3;
  margin: 15px 0px;
  align-self: center;
`

export const FormGroup = styled.View`
  margin: 10px 0px;
`

export const FormLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 13px;
  line-height: 15px;
  color: #17365D;
`

export const Input = styled.TextInput`
  padding: 8px 20px;
  background-color: #ffffff;
  border: 1px solid #70707026;
  border-radius: 8px;
  font-family: Raleway-Bold;
  font-size: 14px;
  line-height: 16px;
  color: #2E3743;
  margin-top: 7px;
`

export const PRCIDWrapper = styled.View`
  background: #E6E6E6;
  width: 100%;
  height: 200px;
  margin-top: 7px;
`

export const UpdatePRCButton = styled.TouchableOpacity`
  background: #17365D;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  margin: 7px 0px;
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