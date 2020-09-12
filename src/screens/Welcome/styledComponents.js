import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
    flex: 1;
`

export const PWContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Illustration = styled.Image`
    width: 205px;
    height: 160px;
    resize-mode: contain;
`

export const HeaderContainer = styled.View`
    margin-top: 10px;
`

export const Text = styled.Text`
    font-family: Raleway-Bold;
    color: #17365D;
    font-size: 12px;
    text-align: center;
`

export const ButtonContainer = styled.View`
    margin-top: 20px;
`

export const BackButtonContainer = styled.View`
    position: absolute;
    top: 20px;
    left: 20px;
`