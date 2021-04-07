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
    flex-direction: column;
`

export const NoteText = styled.Text`
    font-size: 14px;
    font-family: Raleway;
    color: #2E3743;
    text-align: center;
    padding: 30px;
`

export const ImageContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    width: 87%;
    height: 100%;
    resize-mode: contain;
`

export const ButtonsContainer = styled.View`
    margin-top: 20px;
`

export const ModalContainer = styled.View`
    flex: 1;
    background-color: #00000060;
    align-items: center;
    justify-content: center;
`

export const LoadingContainer = styled.View`
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`