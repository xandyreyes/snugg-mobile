import styled from 'styled-components'

export const Container = styled.View`
  padding: 0px 25px;
`

export const Card = styled.View`
  border: 1px solid #7070702E;
  background: #FFFFFF;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`

export const ReviewContainer = styled.View`
  margin-bottom: 10px;
`

export const LeaveReviewLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  line-height: 14px;
  color: #17365D;
`

export const RatingContainer = styled.View`
  margin: 10px 0px 5px;
  flex-direction: row;
`

export const RatingButton = styled.TouchableOpacity`
  margin-left: ${props => props.first ? '0' : '5'}px;
  margin-right: ${props => props.last ? '0' : '5'}px;
`

export const RatingIcon = styled.View`
  width: 15px;
  height: 15px;
  border: 1px solid #767676;
`

export const RatingIconSolid = styled.View`
  width: 15px;
  height: 15px;
  background: #767676;
`

export const ReviewInput = styled.TextInput`
  background: #FAFAFA;
  border: 0.5px solid #70707034;
  padding: 10px;
  text-align-vertical: top;
  margin: 15px 0px;
  font-family: Raleway-Regular;
  font-size: 13px;
  line-height: 14px;
  color: #000000;
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
  width: 50px;
  height: 50px;
  border-radius: 40px;
  overflow: hidden;
`

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`

export const UserInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 12px;
`

export const LeftSection = styled.View`
  flex: 1;
  padding-right: 10px;
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
  margin: 10px 0px;
`