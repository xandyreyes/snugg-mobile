import styled from 'styled-components'

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 7px 0px 0px;
`

export const StarSolid = styled.Image`
  width: 15px;
  height: 15px;
  background: #EC7050;
  border: 1px solid #EC7050;
  margin-left: ${props => props.first ? 0 : 3.8}px;
  margin-right: ${props => props.last ? 0 : 3.8}px;
`

export const StarOutline = styled.Image`
  width: 15px;
  height: 15px;
  border: 1px solid #EC7050;
  margin-left: ${props => props.first ? 0 : 3.8}px;
  margin-right: ${props => props.last ? 0 : 3.8}px;
`