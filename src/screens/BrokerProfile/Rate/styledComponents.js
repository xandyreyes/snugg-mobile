import styled from 'styled-components'

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 7px 0px 0px;
`

export const Star = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: ${props => props.last ? 0 : 3.8}px;
  resize-mode: contain;
`