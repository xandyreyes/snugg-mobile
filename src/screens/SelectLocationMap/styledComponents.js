import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background: white;
`;

export const SafeAreaView = styled.SafeAreaView`
    background: white;
`;

export const TopBar = styled.View`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.Text`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 600;
    color: #17365D;
    text-align: center;
`;

export const BackContainer = styled.View`
    position: absolute;
    left: 20px;
`;

export const TextBoxContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`;

export const TextInputContainer = styled.View`
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 13px 20px;
    width: 300px;
`;

export const LocationIcon = styled.Image`
    height: 15px;
    width: 15px;
    resize-mode: contain;
`;

export const TextInput = styled.TextInput`
    padding: 0;
    margin-left: 12px;
    color: #17365D;
    font-family: Raleway;
    font-size: 14px;
`;

export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 0;
    background: white;
    padding: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;