import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background: white;
`

export const TopBar = styled.View`
    margin-bottom: 0px;
    padding-top: 25px;
    padding-left: 20px;
    flex: 0.1;
    position: absolute;
    top: 0;
    z-index: 3;
`

export const ControlsContainer = styled.View`
    flex: 0.3;
    align-items: center;
    justify-content: center;
`

export const ShutterButton = styled.TouchableOpacity`
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background: white;
    border: 3px solid #f0f0f0;
    justify-content: center;
    align-items: center;
`

export const ShutterDesign = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: #17365D;
`