import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import { Store } from 'src/store'
import {
	BadgeContainer,
	BadgeText,
	BrokerImage,
	BrokerInfoContainer,
	CallButton,
	CallIcon,
	Container,
	Header,
	MainRow,
	MessageButton,
	MessageIcon,
	Row
} from './styledComponents'
import images from '../images'

export default ({ navigation, broker, listing }) => {

	const goToMessage = () => {
		navigation.navigate('Conversation', { id: listing.id, broker, listing })
	}

	const callBroker = () => {
		Linking.openURL(`tel:0${broker.contact_number}`)
	}

	return(
		<Container>
			<Header>Broker</Header>
			<MainRow>
				<TouchableOpacity onPress={() => navigation.navigate('BrokerProfile', {
					userId: broker.id
				})}>
					<Row>
						<BrokerImage source={broker.profile_img ? { uri: broker.profile_img } : images.default_images } />
						<BrokerInfoContainer>
							<Header>{broker.firstname} {broker.lastname}</Header>
							{broker.broker_details.prc_id && broker.broker_details.id_status === 'approved' && (
								<BadgeContainer>
									<BadgeText>Licensed Broker</BadgeText>
								</BadgeContainer>
							)}
						</BrokerInfoContainer>
					</Row>
				</TouchableOpacity>
				{ broker.id !== Store.User?.data?.id ? (
					<Row>
						<MessageButton onPress={goToMessage}>
							<MessageIcon source={images.message} />
						</MessageButton>
						<CallButton onPress={callBroker}>
							<CallIcon source={images.cell} />
						</CallButton>
					</Row>
				) : null }
			</MainRow>
		</Container>
	)
}