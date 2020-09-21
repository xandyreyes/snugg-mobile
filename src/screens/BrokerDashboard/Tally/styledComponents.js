import styled from 'styled-components'

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    margin-horizontal: 20px;
`

export const Container = styled.View`
    background: white;
    border-radius: 8px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    width: 154px;
`

export const Label = styled.Text`
    color: #2E3743;
    font-family: Raleway-Regular;
    font-size: 12px;
`

export const Count = styled.Text`
    color: #EC7050;
    font-size: 20px;
    font-family: Raleway-Bold;
    text-align: center;
    margin-bottom: 9px;
`