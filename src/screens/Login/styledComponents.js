import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #D1D1D1;
`;

export const Illustrations = styled.View`
    flex: 0.5;
    align-items: center;
`;

export const LoginContainer = styled.View`
    flex: 0.5;
    background: #FFFFFF;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.161);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 30px;
`;

export const HouseIllustration = styled.Image`
    height: 128.784px;
    width: 245.752px;
    resize-mode: contain;
    position: absolute;
    bottom: 1px;
`;

export const Logo = styled.Image`
    width: 45%;
    height: 45%;
    position: absolute;
    bottom: ${128.784 + 20}px;
`;

export const Center = styled.View`
    align-items: center;
`;

export const Text = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #17365D;
`;

export const TextHighlight = styled.Text`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #EC7050;
`;

export const Divider = styled.View`
    height: 0.3px;
    width: 100%;
    background: #707070;
    margin-vertical: 25px;
`;