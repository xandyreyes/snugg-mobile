import React, { useState } from 'react'
import {
	Alert
} from 'react-native'
import {
	CallIconReplacement,
	Container,
	ContentContainer,
	Icon,
	MessageIconReplacement,
	Row,
	UserAddressIcon,
	UserAddressLabel,
	UserAddressWrapper,
	UserBrokerStatus,
	UserBrokerStatusLabel,
	UserImage,
	UserInfoButtonsContainer,
	UserInfoContainer,
	UserInfoRow
} from './styledComponents'
import images from './images'
import Rate from './Rate'
import Toggle from './Toggle'
import ScreenToggle from './ScreenToggle'
import OptionModal from './OptionModal'

const BrokerProfile = () => {

	const [activePage, setActivePage] = useState('Properties')
	const [selectedProperty, setSelectedProperty] = useState({})
	const [modalVisible, setModalVisible] = useState(false)

	const messageButtonOnPress = () => {
		Alert.alert('Button on press', 'Message button on press')
	}

	const callButtonOnPress = () => {
		Alert.alert('Button on press', 'Call button on press')
	}

	const onChangeToggle = column => {
		setActivePage(column)
	}
  
	const propertyOptionOnPress = property => () => {
		setSelectedProperty(property)
		toggleModalVisible()
	}

	const toggleModalVisible = () => {
		setModalVisible(!modalVisible)
	}

	const editOnPress = () => {

	}

	const deleteOnPress = () => {

	}

	return (
		<Container>
			<OptionModal
				isVisible={modalVisible}
				toggleModal={toggleModalVisible}
				editOnPress={editOnPress}
				deleteOnPress={deleteOnPress}
			/>

			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserInfoContainer>
					<UserImage />
					<UserInfoRow>
						<UserBrokerStatus>
							<UserBrokerStatusLabel>
								Licensed Broker
							</UserBrokerStatusLabel>
						</UserBrokerStatus>
						<Rate rate={3} />
						<UserAddressWrapper>
							<UserAddressIcon source={images.pin_location} />
							<UserAddressLabel>Greenhills, San Juan City</UserAddressLabel>
						</UserAddressWrapper>
					</UserInfoRow>
					<UserInfoButtonsContainer>
						<MessageIconReplacement onPress={messageButtonOnPress}>
							<Icon source={images.message} />
						</MessageIconReplacement>
						<CallIconReplacement onPress={callButtonOnPress}>
							<Icon source={images.cell} />
						</CallIconReplacement>
					</UserInfoButtonsContainer>
				</UserInfoContainer>
				<Row>
					<Toggle onChangeToggle={onChangeToggle} defaultAs={activePage} />
				</Row>
				<ScreenToggle
					page={activePage}
					propertyOptionOnPress={propertyOptionOnPress} />
			</ContentContainer>
		</Container>
	)
}

export default BrokerProfile