import styled from 'styled-components'

export const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 26px;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
  elevation: 5;
`

export const ChatButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #EC7050;
  margin: 0px 15px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`

export const HeartButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
  elevation: 5;
`

export const CloseIcon = styled.View`
  width: 18px;
  height: 18px;
  resize-mode: contain;
  background: #17365D;
`

export const ChatIcon = styled.View`
  width: 27px;
  height: 27px;
  resize-mode: contain;
  background: white;
`

export const HeartIcon = styled.View`
  width: 20px;
  height: 18px;
  resize-mode: contain;
  background: #EC7050;
`