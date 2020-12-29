import React, { useState } from 'react'
import { get } from 'lodash'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import Loading from 'src/components/Loading'
import {
	ButtonContainer,
	Container,
	Form,
	Header,
	Row,
	SubscriptionDetailsText,
	SubscriptionHeaderText,
	SubscriptionImage
} from './styledComponents'
import images from './images'
import CancelModal  from './CancelModal'
import { Store } from 'src/store'

export default ({ navigation }) => {
	const [loading, isLoading] = useState(false)
	const [cancelModalVisible, setCancelModalVisible] = useState(false)
	
	const CurrentSubscription = get(Store.User,'data.broker_details.subscription.name','')
	const toggleCancelModalVisible = () => {
		setCancelModalVisible(!cancelModalVisible)
	}
	
	const cancelOnPress = () => {
		toggleCancelModalVisible()
		console.log('cancel subscription')
	}

	return(
		<Container>
			{ loading && <Loading /> }
			<Row>
				<Back navigation={navigation} />
				<Header>Subscription</Header>
			</Row>
			<CancelModal
				isVisible={cancelModalVisible}
				toggleModal={toggleCancelModalVisible}
				cancelOnPress={cancelOnPress}
				goBackOnPress={()=>setCancelModalVisible(false)}
			/>
			<Form>
				<SubscriptionImage source={images.broker_subscription} resizeMode={'contain'}/>
				<SubscriptionHeaderText>{CurrentSubscription}</SubscriptionHeaderText>
				<SubscriptionDetailsText>- Lorem ipsum dolor isit amet</SubscriptionDetailsText>
				<SubscriptionDetailsText>- Lorem ipsum dolor isit amet</SubscriptionDetailsText>
				<SubscriptionDetailsText>- Lorem ipsum dolor isit amet</SubscriptionDetailsText>
				<ButtonContainer>
					<Button text="CHANGE SUBSCRIPTION" onPress={() => navigation.navigate('SelectSubscriptionPlan', { fromSettings: true })} width={200} />
				</ButtonContainer>
				<ButtonContainer style={{marginTop:0,marginBottom:0}}>
					<Button text="CANCEL SUBSCRIPTION" onPress={toggleCancelModalVisible} width={200} inverse={true}/>
				</ButtonContainer>
			</Form>
		</Container>
	)
}