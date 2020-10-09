import styled from 'styled-components'

export const Container = styled.View`
  padding: 15px;
`

export const Header = styled.Text`
  color: #17365D;
  font-size: 14px;
  font-family: Raleway-Bold;
`

export const DetailTable = styled.View`
  margin: 10px 0px 0px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${props => props.highlight == 0 ? '#F4F4F4' : '#EC705000'};
`

export const Col = styled.View`
  padding: 6px 16px;
  flex: 1;
`

export const Label = styled.Text`
  color: #17365D;
  font-size: 12px;
  font-family: Raleway-Regular;
`