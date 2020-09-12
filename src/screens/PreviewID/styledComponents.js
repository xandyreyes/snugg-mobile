import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
    flex: 1;
`

export const BackContainer = styled.View`
    padding: 20px;
`

export const ContentContainer = styled.View`
    flex: 0.92;
    align-items: center;
`

export const NoteText = styled.Text`
    font-size: 14px;
    font-family: Raleway;
    color: #2E3743;
    text-align: center;
    padding: 30px;
`

export const Image = styled.Image`
    width: 350px;
    height: 350px;
    resize-mode: cover;
`

export const ButtonsContainer = styled.View`
    margin-top: 30px;
`