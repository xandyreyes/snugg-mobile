import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

export const Container = styled.View`
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.05);
`

export const Image = styled.ImageBackground`
    width: 100%;
    flex: 1;
    resize-mode: cover;
    background: #f0f0f0;
    justify-content: flex-end;
    align-items: flex-end;
`

export const PriceContainer = styled.View`
    align-self: flex-end;
    padding: 8px 12px 8px 15px;
    background: #17365D;
    border-top-left-radius: 10px;
`

export const PriceText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-family: Raleway-Bold;
`

export const InfoContainer = styled.View`
    padding: 15px 22px;
    background: white;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Title = styled.Text`
    color: rgba(23, 54, 93, 1);
    font-family: Raleway-Bold;
    font-size: 16px;
    max-width: ${width - 92}
`

export const Verified = styled.Image`
    width: 12px;
    height: 12px;
    margin-left: 6px;
    resize-mode: contain;
`

export const Description = styled.Text`
    color: rgba(8, 20, 34, 1);
    font-family: Raleway-Regular;
    font-size: 12px;
    margin-vertical: 4px;
`

export const RowWrap = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`

export const LocationIcon = styled.Image`
    width: 6.5px;
    height: 9.64px;
    resize-mode: contain;
    tint-color: rgba(118, 118, 118, 1);
    margin-right: 5.5px;
    margin-top: 9px;
`

export const LocationText = styled.Text`
    color: rgba(118, 118, 118, 1);
    font-size: 12px;
    font-family: Raleway-Regular;
    margin-top: 9px;
`