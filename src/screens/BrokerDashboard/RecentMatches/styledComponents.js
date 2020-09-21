import styled from 'styled-components'

export const Container = styled.View`
    background: white;
    border-radius: 8px;
    padding: 15px 40px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
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
    font-size: 12px;
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
    border: 1px solid #EC7050;
    margin-right: -15px;
`