import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    margin-horizontal: 20px;
`

export const Container = styled.TouchableOpacity`
    background: white;
    border-radius: 8px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    width: ${(width - 55)/2};
`

export const Label = styled.Text`
    color: #2E3743;
    font-family: Raleway-Bold;
    font-size: 12px;
`

export const Count = styled.Text`
    color: #EC7050;
    font-size: 20px;
    font-family: Raleway-Bold;
    text-align: center;
    margin-bottom: 9px;
`