import React, { useState } from 'react'
import {Alert} from 'react-native'
import { requestSubscription } from 'react-native-iap'
import { userUpdateAPI } from 'src/api/auth'
import Back from 'src/components/Back'
import { Store } from 'src/store'
import SelectedModal from './SelectedModal'
import {
	BackContainer,
	Container,
	Header,
	HeaderText,
	ItemsContainer,
	SafeAreaView,
	ScrollView
} from './styledComponents'
import SubscriptionItem from './SubscriptionItem'

const subscriptions = [
	{
		id: 1,
		name: '14 Days Trial',
		no_of_listing: 2,
		price: 0
	},
	{
		id: 2,
		name: 'Individual Broker',
		no_of_listing: 10,
		price: 250
	},
	{
		id: 3,
		name: 'Sales',
		no_of_listing: 30,
		price: 500
	},
	{
		id: 4,
		name: 'Agency',
		no_of_listing: 50,
		price: 750
	},
	{
		id: 5,
		name: 'Developer',
		no_of_listing: null,
		price: 1000
	}
]

export default ({ navigation, route }) => {

	const { location, prc_id, fromSettings } = route.params

	const [subscription, selectSubscription] = useState(null)
	const [visible, setModalVisibility] = useState(false)

	const select = (index) => {
		selectSubscription(subscriptions[index])
		setModalVisibility(true)
	}

	const onPressSubscribe = async () => {
		try {
			if (fromSettings) {
				const body = {
					subscription_id: subscription.id
				}
				// const subs = requestSubscription();
				const response = await userUpdateAPI(Store.User.data?.id, body)
				if(response) {
					const { message } = response
					Store.User.setData(response.data)
					console.log('[User update message]', message)
					console.log(response.data, 'DAta')
					setModalVisibility(false)
					navigation.reset({
						index: 0,
						routes: [{ name: 'BrokerTabs' }]
					})
				}
			} else {
				const body = {
					lat: location.latitude,
					lon: location.longitude,
					prc_id,
					subscription_id: subscription.id
				}
				const response = await userUpdateAPI(Store.User.data?.id, body)
				if(response) {
					const { message } = response
					Store.User.setData(response.data)
					console.log('[User update message]', message)
					setModalVisibility(false)
					navigation.navigate('EnableLocation')
				}
			}
		} catch (e) {
			Alert.alert('Error', e.response?.data?.message)
			console.log('[ERROR UPDATING]', e.response?.data)
			console.log('[ERROR UPDATING]', e)
		}
	}

	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FFF', '#FFF', '#E8E8E8']}>
			<SelectedModal 
				visible={visible}
				close={() => setModalVisibility(false)}
				subscription={subscription ? subscription : subscriptions[0]}
				onSubscribe={onPressSubscribe}
			/>
			<SafeAreaView>
				<BackContainer>
					<Back color="white" navigation={navigation}/>
				</BackContainer>
			</SafeAreaView>
			<ScrollView>
				<Header start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#25446A', '#17365D', '#092343']}>
					<HeaderText>
                        Select a Subscription Plan
					</HeaderText>
				</Header>
				<ItemsContainer>
					{ subscriptions.map((sub, index) => (
						<SubscriptionItem
							key={index}
							id={sub.id}
							index={index}
							name={sub.name}
							no_of_listing={sub.no_of_listing}
							price={sub.price}
							onPress={select}
						/>
					))}
				</ItemsContainer>
			</ScrollView>
		</Container>
	)
}