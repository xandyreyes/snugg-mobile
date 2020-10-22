import React from 'react'
import { get } from 'lodash'
import moment from 'moment'
import { Store } from 'src/store'
import {
	Card,
	Container,
	DateLabel,
	LeftSection,
	ReviewLabel,
	Row,
	UserImage,
	UserImageWrapper,
	UserInfoContainer,
	UserNameLabel
} from './styledComponents'
import LeaveReview from './LeaveReview'
import images from '../images'
import Rate from '../Rate'

const Reviews = ({ reviews, userId }) => {
	return (
		<Container>
			{ Store.User.data.id !== userId && (
				<LeaveReview userId={userId} />
			)}
			{reviews.map((r, index) =>
				<Card key={index}>
					<Row>
						<UserImageWrapper>
							<UserImage source={r.userImage ? { uri: r.userImage} : images.default_image} />
						</UserImageWrapper>
						<UserInfoContainer>
							<LeftSection>
								<UserNameLabel>{get(r, 'user.name', 'Anonymous')}</UserNameLabel>
								<Rate rate={r.rating} />
							</LeftSection>
							<DateLabel>{moment(r.created_at).format('MMM DD, YYYY')}</DateLabel>
						</UserInfoContainer>
					</Row>
					<ReviewLabel>{r.message}</ReviewLabel>
				</Card> 
			)}
		</Container>
	)
}

export default Reviews
