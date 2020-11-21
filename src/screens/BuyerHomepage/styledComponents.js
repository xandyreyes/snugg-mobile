import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

export const Container = styled.View`
    background: white;
    flex: 1;
    padding: 15px;
`

export const RowSpace = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Header = styled.Text`
    color: #17365D;
    font-family: Raleway-Bold;
    font-size: 30px;
`

export const SearchBar = styled.TouchableOpacity`
    width: 100%;
    background: #EFEFEF;
    border-radius: 30px;
    padding: 13px 16px;
    flex-direction: row;
    align-items: center;
    margin-vertical: 24px;
`

export const LocationIcon = styled.Image`
    height: 15px;
    width: 15px;
    resize-mode: contain;
    margin-right: 12px;
`

export const SearchText = styled.Text`
    color: rgba(23, 54, 93, 1);
    font-size: 14px;
    font-family: Raleway-Regular;
    max-width: ${width - 89}px;
`