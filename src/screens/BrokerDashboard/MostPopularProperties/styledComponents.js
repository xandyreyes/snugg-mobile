import styled from 'styled-components'

export const Container = styled.View`
    margin-top: 16px;
`

export const Header = styled.Text`
    font-family: Raleway-Bold;
    font-size: 20px;
    color: #17365D;
    margin-left: 20px;
`

export const FlatList = styled.FlatList`
    margin-top: 10px;
`

export const PropertyTouchable = styled.TouchableOpacity`
    padding: 15px;
    width: 280px;
    background: white;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1)
    border-radius: 8px;
    margin-right: 15px
    flex-direction: row;
`

export const PropertyImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`

export const PropertyDetails = styled.View`
    margin-left: 13px;
    justify-content: center;
`

export const PropertyName = styled.Text`
    font-family: Raleway-Bold;
    font-size: 14px;
    color: #17365D;
    width: 150px;
`

export const Row = styled.View`
    flex-direction: row;
    width: 150px;
`

export const LocationIcon = styled.View`
    height: 9.64px;
    width: 6.5px;
    resize-mode: contain;
    margin-right: 5px;
`

export const LocationName = styled.Text`
    font-family: Raleway-Regular;
    color: #767676;
    font-size: 12px;
`

export const HeartIcon = styled.Image`
    width: 12.75px;
    height: 12px;
    resize-mode: contain;
`

export const Matches = styled.Text`
    font-family: Raleway-Regular;
    color: #2E3743;
    font-size: 12px;
`