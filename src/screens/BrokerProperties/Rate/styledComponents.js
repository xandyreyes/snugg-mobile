import styled from 'styled-components'

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 7px 0px 0px;
`

export const StarSolid = styled.View`
  width: 17px;
  height: 17px;
  background: #EC7050;
  border: 1px solid #EC7050;
  margin-left: ${props => props.first ? 0 : 5}px;
  margin-right: ${props => props.last ? 0 : 5}px;
`

export const StarOutline = styled.View`
  width: 17px;
  height: 17px;
  border: 1px solid #EC7050;
  margin-left: ${props => props.first ? 0 : 5}px;
  margin-right: ${props => props.last ? 0 : 5}px;
`