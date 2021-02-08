import styled from 'styled-components'

export const Container = styled.View`
    align-items: center;
    width: 100%;
    flex: 1;
`

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 150px;
    margin-vertical: 20px;
    position: absolute;
    bottom: 0;
`

export const ButtonContainer = styled.View`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

export const Reject = styled.TouchableOpacity`
    background: rgba(23, 54, 93, 1);
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px
`

export const Like = styled.TouchableOpacity`
    background: rgba(236, 112, 80, 1);
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px
`

export const Image = styled.Image`
    height: 21px;
    width: 21px;
    resize-mode: contain;
`

export const HeartEmpty = styled.Image`
    height: 27px;
    width: 29.25px;
    resize-mode: contain;
`

export const NoMoreCards = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const NoMoreCardText = styled.Text`
    color: rgba(236, 112, 80, 1);
    font-size: 24px;
    font-family: Raleway-Regular;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    margin-top: -100px;
`