import styled from 'styled-components'

export const Container = styled.View`
    background: white;
    flex: 1;
`

export const ScrollView = styled.ScrollView`
    padding: 15px;
`

export const Header = styled.Text`
    font-size: 20px;
    color: #17365D;
    font-family: Raleway-Bold;
    margin-vertical: 15px;
`

export const Text = styled.Text`
    font-size: 12px;
    color: #2E3743;
    font-family: Raleway-Regular;
`

export const SubHeader = styled.Text`
    font-size: 14px;
    color: #EC7050;
    font-family: Raleway-Bold;
    margin-vertical: 15px;
`

export const SubHeader2 = styled.Text`
    font-size: 12px;
    color: #EC7050;
    font-family: Raleway-Bold;
    margin-top: 10px;
    margin-bottom: 5px;
`

export const Spacer = styled.View`
    height: 10px;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Check = styled.Image`
    height: 7.2727px;
    width: 10px;
    resize-mode: contain;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 10px;
`

export const PartnersContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const PartnerLogo = styled.Image`
    border-radius: 5px;
    background: white;
    resize-mode: contain;
    height: 50px;
    width: 100px;
    margin: 5px;
`