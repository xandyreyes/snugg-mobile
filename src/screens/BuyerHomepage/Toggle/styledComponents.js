import styled from 'styled-components'

export const Container = styled.View`
    background: #EFEFEF;
    height: 33px;
    border-radius: 30px;
    width: 95px;
`

export const Selected = styled.View`
    background: #17365D;
    height: 33px;
    border-radius: 30px;
    width: 47.5px;
    position: absolute;
`

export const ItemContainer = styled.TouchableOpacity`
    width: 47.5px;
    height: 33px;
    align-items: center;
    justify-content: center;
`

export const ItemImage = styled.Image`
    width: 20px;
    height: 20px;
    resize-mode: contain;
    tint-color: ${prop => prop.selected ? 'white' : '#17365D'};
`

export const Row = styled.View`
    flex-direction: row;
`