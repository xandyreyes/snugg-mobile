import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
    border-radius: 30px;
    background: #17365D;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    padding-vertical: 13px;
    align-items: center;
    padding-horizontal: ${p => !p.width ? '50px' : '0'};
    width: ${p => p.width ? `${p.width}px` : 'auto'};
`

export const ButtonText = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export const ButtonSecondary = styled.TouchableOpacity`
    border-radius: 30px;
    background: white;
    border: 1px solid #EC7050;
    padding-vertical: 13px;
    align-items: center;
    width: ${p => p.width ? `${p.width}px` : 'auto'};
`

export const ButtonTextSecondary = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #EC7050;
`

export const Input = styled.TextInput`
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 13px 20px;
    font-family: Raleway;
    font-size: 14px;
    color: #17365D;
    margin-top: 15px;
`

export const Header = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: ${ p => p.variant === 'secondary' ? '#EC7050' : '#17365D'};
`

export const Center = styled.View`
    align-items: center;
`

export const Modal = styled.View`
    background: white;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    width: 85%;
`

export const BackImage = styled.Image`
    height: 23.62px;
    width: 13.5px;
    resize-mode: contain;
    ${p => p.color === 'white' && `
        tint-color: white;
    `}
`

export const Row = styled.View`
    flex-direction: row;
`

export const LoadingOverlay = styled.View`
    background: rgba(255,255,255,0.3);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 9999;
    justify-content: center;
    align-items: center;
`

export const LoadingImage = styled.Image`
    height: 30px;
    width: 30px;
    resize-mode: contain;
    position: absolute;
`