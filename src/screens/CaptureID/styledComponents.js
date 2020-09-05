import styled from 'styled-components';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    flex: 1;
`;

export const BackImage = styled.Image`
    height: 23.62px;
    width: 13.5px;
    resize-mode: contain;
`;

export const CaptureContainer = styled.View`
    padding: 20px;
    flex: 1;
`;

export const ContentContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Paragraph = styled.Text`
    font-family: Raleway;
    font-size: 14px;
    text-align: center;
    color: #2E3743;
    margin-top: 36px;
`;

export const Image = styled.Image`
    width: 231px;
    height: 165px;
    resize-mode: contain;
    margin-top: 20px;
    z-index: 2;
`;

export const InstructionContainer = styled.View`
    width: 100%;
    padding: 36px 28px;
    border-radius: 30px;
    background: #17365D;
    margin-top: -28px;
    z-index: ${Platform.OS === "ios" ? -1 : 1};
`;

export const InstructionText = styled.Text`
    font-family: Raleway-Bold;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
`;

export const ButtonContainer = styled.View`
    margin-top: 30px;
`;