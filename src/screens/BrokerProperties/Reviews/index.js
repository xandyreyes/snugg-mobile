import React from 'react'
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
import images from './images'
import Rate from '../Rate'

const reviews = [
	{
		image_url: images.avatar1,
		name: 'Ryujin',
		rate: 3,
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus.',
		created_at: '11/22/2019'
	}, {
		image_url: images.avatar2,
		name: 'Irene',
		rate: 3,
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus.',
		created_at: '11/22/2019'
	}, {
		image_url: images.avatar3,
		name: 'Wendy',
		rate: 3,
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus.',
		created_at: '11/22/2019'
	}
]

const Reviews = () => {
	return (
		<Container>
			<LeaveReview />
			{reviews.map((r, index) =>
				<Card key={index}>
					<Row>
						<UserImageWrapper>
							<UserImage source={r.image_url} />
						</UserImageWrapper>
						<UserInfoContainer>
							<LeftSection>
								<UserNameLabel>{r.name}</UserNameLabel>
								<Rate rate={r.rate} />
							</LeftSection>
							<DateLabel>{r.created_at}</DateLabel>
						</UserInfoContainer>
					</Row>
					<ReviewLabel>{r.review}</ReviewLabel>
				</Card> 
			)}
		</Container>
	)
}

export default Reviews
