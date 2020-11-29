import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
    border-radius: 30px;
    background: ${p => !p.inverse? '#17365D':'#FFFFFF'};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    padding-vertical: 13px;
    align-items: center;
    justify-content: center;
    padding-horizontal: ${p => !p.width ? '50px' : '0'};
    width: ${p => p.width ? `${p.width}px` : 'auto'};
    ${p => p.inverse? 'border: 1px solid #17365D;':''};
`

export const ButtonText = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${p => !p.inverse? '#FFFFFF':'#17365D'};;
    opacity: ${props => props.disabled ? 0 : 1};
`

export const ButtonLoading = styled.View`
    position: absolute;
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

export const TextInputContainer = styled.View`
    width: 100%;
`

export const Label = styled.Text`
    color: #17365D;
    font-family: Raleway-Regular;
    font-size: 12px;
    text-align: left;
`

export const TextInput = styled.TextInput`
    background: white;
    height: 40px;
    width: 100%;
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding-horizontal: 8px;
    font-family: Raleway-Regular;
`

export const ToggleContainer = styled.View`
    width: 100%;
    background: #E3E3E3;
    border-radius: 8px;
    height: 40px;
    flex-direction: row;
    margin-bottom: 15px;
`

export const SelectedContainer = styled.View`
    border-radius: 8px;
    background: #17365D;
    width: 50%;
    height: 40px;
    z-index: 1;
    position: absolute;
`

export const ButtonTouchable = styled.TouchableOpacity`
    padding: 13px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 40px;
    z-index: 2;
`

export const ToggleText = styled.Text`
    font-family: Raleway;
    font-size: 12px;
    color: ${p => p.selected ? 'white' : '#17365D'};
    text-align: center;
`

export const CheckboxContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-vertical: 4px;
`

export const CheckboxTouchable = styled.View`
    background: white;
    border: 1px solid #DEDEDE;
    border-radius: 3px;
    height: 13px;
    width: 13px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`

export const CheckedView = styled.Image`
    resize-mode: contain;
    height: 8px;
    width: 8px;
`