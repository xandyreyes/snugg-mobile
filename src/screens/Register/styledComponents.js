import styled from 'styled-components'

export const Container = styled.ScrollView`
    flex: 1;
    padding: 20px 30px;
`

export const Text = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #17365D;
`

export const RegisterAsContainer = styled.View`
    margin-top: 20px;
`

export const TNC = styled.View`
    margin-top: 20px;
`

export const ButtonContainer = styled.View`
    margin: 20px 0;
`

export const LoginContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LoginTextTouchable = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #EC7050;
    margin-left: 3px;
`

export const Illustration = styled.Image`
    width: 80%;
    height: 200px;
    resize-mode: contain;
`

/* TOGGLE SWITCH */
export const ToggleContainer = styled.View`
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    flex-direction: row;
    margin: 5px 0;
`

export const SelectedContainer = styled.View`
    border-radius: 30px;
    background: #EC7050;
    padding: 13px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 42px;
    z-index: 1;
    position: absolute;
`

export const ButtonTouchable = styled.TouchableOpacity`
    padding: 13px 0;
    text-align: center;
    justify-content: center;
    width: 50%;
    height: 42px;
    z-index: 2;
`

export const ToggleText = styled.Text`
    font-family: Raleway;
    font-size: 14px;
    color: ${p => p.selected ? 'white' : '#17365D'};
    text-align: center;
`

export const Row = styled.View`
		align-items: center;
		justify-content: center;
		flex-direction: row;
`