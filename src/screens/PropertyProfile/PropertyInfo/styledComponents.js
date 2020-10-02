import styled from 'styled-components'

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
`