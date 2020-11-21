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
  padding: 15px;
  justify-content: center;
`

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`