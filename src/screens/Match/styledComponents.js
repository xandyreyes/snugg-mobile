import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
    flex: 1;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`

export const ModalContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const ContentContainer = styled.View`
    align-items: center;
    justify-content: center;
`

export const MatchIllustration = styled.Image`
    width: 150px;
    height: 150px;
    resize-mode: contain;
    margin-vertical: 10px;
`

export const Heading2 = styled.Text`
    color: #EC7050;
    font-weight: 600;
    font-size: 16px;
    margin-vertical: 4px;
`

export const Text = styled.Text`
    color: #2E3743;
    font-size: 12px;
    margin-vertical: 10px;
`

export const BackContainer = styled.View`
    padding: 15px;
`