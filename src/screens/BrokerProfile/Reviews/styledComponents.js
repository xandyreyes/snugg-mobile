import styled from 'styled-components'

export const Container = styled.View`
  padding: 0px 25px;
`

export const Card = styled.View`
  border: 1px solid #7070702E;
  background: #FFFFFF;
  padding: 13px 16px;
  border-radius: 10px;
  margin-bottom: 11px;
`

export const ReviewContainer = styled.View`
  margin-bottom: 8px;
`

export const LeaveReviewLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`

export const RatingContainer = styled.View`
  margin-top: 4.38px;
  flex-direction: row;
`

export const RatingButton = styled.TouchableOpacity`
  margin-right: ${props => props.last ? '0' : '4'}px;
`

export const RatingIcon = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`

export const RatingIconSolid = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`

export const ReviewInput = styled.TextInput`
  background: #FAFAFA;
  border: 0.5px solid #70707034;
  padding: 10px;
  text-align-vertical: top;
  margin-vertical: 10px;
  font-family: Raleway-Regular;
  font-size: 13px;
  line-height: 14px;
  color: #000000;
  min-height: 57px;
`

export const SubmitButton = styled.TouchableOpacity`
  align-self: flex-end;
`

export const SubmitLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`

/* REVIEW STYLES */
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const UserImageWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  border: 0.5px solid rgba(0,0,0,0.16);
`

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`

export const UserInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 9px;
`

export const LeftSection = styled.View`
  flex: 1;
`

export const UserNameLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`

export const DateLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #2E3743;
`

export const ReviewLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #2E3743;
  margin: 7px 0px;
`