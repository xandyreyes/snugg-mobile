import styled from 'styled-components'
import FastImage from 'react-native-fast-image'

export const SafeAreaView = styled.SafeAreaView`
    z-index: 19;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Container = styled.View`
    width: 100%;
    height: 292px;
`

export const ButtonsRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    z-index: 20;
    width: 100%;
`

export const ShareImage = styled.Image`
    height: 25px;
    width: 25px;
    resize-mode: cover;
    tint-color: white;
`

export const PropertyImage = styled(FastImage)`
    width: 100%;
    height: 292px;
    resize-mode: cover;
`

export const PriceContainer = styled.View`
    background: #17365D;
    border-top-left-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 8px 12px 8px 15px;
`

export const PriceText = styled.Text`
    color: white;
    font-size: 16px;
    font-family: Raleway-Bold;
`