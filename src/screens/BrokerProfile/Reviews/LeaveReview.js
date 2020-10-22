import React, {useState} from 'react'
import { Alert } from 'react-native'
import { postReviewUserAPI } from 'src/api/user'
import {
	Card,
	LeaveReviewLabel,
	ReviewContainer,
	ReviewInput,
	SubmitButton,
	SubmitLabel
} from './styledComponents'
import Rating from './Rating'

const LeaveReview = ({ userId }) => {

	const [rate, setRate] = useState(0)
	const [review, setReview] = useState('')

	const onSubmit = async () => {
		if (review === '') {
			Alert.alert(
				'Message should not be empty!',
				'You must write a message to leave a review',
				[
					{ text: 'OK' }
				]
			)
			return
		}
		if (rate === 0) {
			Alert.alert(
				'Please rate the broker',
				'Tap on the stars to select the rating of the broker',
				[
					{ text: 'OK' }
				]
			)
			return
		}
		try {
			const data = {
				broker_id: userId,
				rating: rate,
				message: review
			}
			const review = postReviewUserAPI(data)
			if (review) {
				Alert.alert(
					review.message,
					'Your review will not be immediately shown to the broker\'s profile',
					[
						{ text: 'OK' }
					]
				)
			}
		} catch (err) {
			Alert.alert(
				'Unable to leave a review', 
				'Sorry, you cannot leave a comment right now',
				[
					{ text: 'OK' }
				]
			)
			setRate(0)
			setReview('')
		}
	}

	return (
		<ReviewContainer>
			<Card>
				<LeaveReviewLabel>Leave a Review</LeaveReviewLabel>
				<Rating onChangeRate={r => setRate(r)} defaultRate={rate} />
				<ReviewInput multiline={true} numberOfLines={3} onChangeText={text => setReview(text)} value={review} />
				<SubmitButton onPress={onSubmit}>
					<SubmitLabel>SUBMIT</SubmitLabel>
				</SubmitButton>
			</Card>
		</ReviewContainer>
	)
}

export default LeaveReview