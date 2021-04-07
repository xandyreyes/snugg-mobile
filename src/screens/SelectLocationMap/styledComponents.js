import styled from 'styled-components'
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
    flex: 1;
    background: white;
`

export const SafeAreaView = styled.SafeAreaView`
    background: white;
`

export const TopBar = styled.View`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Header = styled.Text`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 600;
    color: #17365D;
    text-align: center;
`

export const BackContainer = styled.View`
    position: absolute;
    left: 20px;
`

export const TextBoxContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`

export const TextInputContainer = styled.View`
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 13px 20px;
    width: 300px;
    justify-content: center;
`

export const LocationIcon = styled.Image`
    height: 15px;
    width: 15px;
    resize-mode: contain;
    align-self: center;
`

export const TextInput = styled.TextInput`
    padding: 0;
    margin-left: 12px;
    color: #17365D;
    font-family: Raleway;
    font-size: 14px;
`

export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0;
    background: white;
    padding: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const PinImage = styled.Image`
    width: 20.25px;
    height: 29.25px;
    position: absolute;
    top: ${(height/2) - 29.25}px;
    left: ${(width/2) - 10.125}px;
`

export const ItemContainer = styled.TouchableOpacity`
    padding: 20px;
    background: white;
    border-top-color: #DEDEDE;
    border-top-width: 1px;
`

export const ItemText = styled.Text`
    font-family: Raleway-Bold;
    font-size: 14px;
    color: #17365D;
`