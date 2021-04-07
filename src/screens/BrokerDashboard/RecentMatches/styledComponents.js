import styled from 'styled-components'

export const Container = styled.View`
    margin-horizontal: 20px;
`

export const Header = styled.Text`
    color: #17365D;
    font-size: 20px;
    font-family: Raleway-Bold;
    text-align: center;
    margin-bottom: 9px;
`

export const Text = styled.Text`
    color: #2E3743;
    font-family: Raleway-Regular;
		font-size: 14px;
		margin-bottom: 10px;
`

export const ImagesContainer = styled.View`
    flex-direction: row;
    margin-right: 15px;
    margin-vertical: 13px;
`

export const Image = styled.Image`
    height: 45px;
    width: 45px;
    border-radius: 22.5px;
    border-width: 1px;
    border-color: #EC7050;
    margin-right: -15px;
`