import React, {useState} from 'react'
import { Alert } from 'react-native'
import {
	Card,
	LeaveReviewLabel,
	ReviewContainer,
	ReviewInput,
	SubmitButton,
	SubmitLabel
} from './styledComponents'
import Rating from './Rating'

const LeaveReview = () => {

	const [rate, setRate] = useState(0)
	const [review, setReview] = useState('')

	const onSubmit = () => {
		Alert.alert('Press', `Submit button pressed\nRate: ${rate}\nReview: ${review}`)
		setRate(0)
		setReview('')
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