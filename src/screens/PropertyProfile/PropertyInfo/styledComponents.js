import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    padding: 15px;
`

export const NameContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 7px;
`

export const Name = styled.Text`
    color: #17365D;
    font-family: Raleway-Bold;
    font-size: 16px;
`

export const Verified = styled.Image`
    height: 12px;
    width: 12px;
    resize-mode: contain;
    margin-left: 6px;
`

export const PinIcon = styled.Image`
    width: 6.5px;
    height: 9.64px;
    resize-mode: contain;
    tint-color: #767676;
    margin-right: 5.5px;
`

export const Location = styled.Text`
    color: #767676;
    font-size: 12px;
    font-family: Raleway-Regular;
    max-width: 300px;
`

export const DescriptionContainer = styled.View`
    margin-top: 10px;
`

export const HTMLContainer = styled.View`
		height: ${({showAll}) => showAll ? 'auto' : '80px'};
		overflow: hidden;
`

export const DescriptionText = styled.Text`
    font-family: Raleway-Regular;
    color: #2E3743;
    font-size: 12px;
`

export const ReadMoreGradient = styled(LinearGradient)`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: flex-end;
`

export const ReadMoreButton = styled.View`
    background: #17365D;
    border-radius: 30px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`

export const ReadMoreTouchable = styled.TouchableOpacity`
    padding: 7px 16px;
`

export const ReadMoreText = styled.Text`
    font-family: Raleway-Regular;
    color: white;
    font-size: 10px;
`

export const ReadLessContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 8px;
`