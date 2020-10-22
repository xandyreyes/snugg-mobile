import React, { useEffect, useState } from 'react'
import { get, size, sumBy } from 'lodash'
import ContentLoader, { Rect } from 'react-content-loader/native'
import {
	Alert,
	Linking
} from 'react-native'
import { getUserAPI } from 'src/api/user'
import Back from 'src/components/Back'
import {
	CallIconReplacement,
	Container,
	ContentContainer,
	Header,
	Icon,
	MessageIconReplacement,
	Row,
	RowNav,
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

const BrokerProfile = ({ navigation, route }) => {

	const [activePage, setActivePage] = useState('Properties')
	const [selectedProperty, setSelectedProperty] = useState({})
	const [modalVisible, setModalVisible] = useState(false)
	const [user, setUserInfo] = useState(null)

	useEffect(() => {
		getUserInfo()
	}, [])

	const getUserInfo = async () => {
		try {
			const response = await getUserAPI(route.params.userId)
			setUserInfo(response.data)
		} catch (err) {
			Alert.alert(
				'Unable to retrieve user',
				get(err, 'response.data.message', 'Network Error'),
				[
					{text: 'Okay'}
				]
			)
		}
	}

	const messageButtonOnPress = () => {
		Alert.alert('Button on press', 'Message button on press')
	}

	const callButtonOnPress = (phoneNumber) => {
		Linking.openURL(`tel:0${phoneNumber}`)
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

	const getRating = (ratings) => {
		const total = sumBy(ratings, 'rating')
		const length = size(ratings)
		return total/length
	}

	return (
		<Container>
			<OptionModal
				isVisible={modalVisible}
				toggleModal={toggleModalVisible}
				editOnPress={editOnPress}
				deleteOnPress={deleteOnPress}
			/>
			<RowNav>
				<Back navigation={navigation} />
				{ user ? (<Header>{`${user.firstname} ${user.lastname}`}</Header>) : (
					<ContentLoader viewBox="0 0 380 70">
						<Rect y="10" rx="5" ry="5" width="300" height="50" />
					</ContentLoader>
				) }
			</RowNav>
			{ !user ? (null) : (
				<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
					<UserInfoContainer>
						<UserImage source={user.profile_img ? { uri: user.profile_img}: images.default_image} />
						<UserInfoRow>
							{ user.broker_details.id_status === 'approved' && user.broker_details.prc_id !== null && (
								<UserBrokerStatus>
									<UserBrokerStatusLabel>
										Licensed Broker
									</UserBrokerStatusLabel>
								</UserBrokerStatus>
							)}
							<Rate rate={getRating(get(user, 'broker_details.reviews', []))} />
							<UserAddressWrapper>
								<UserAddressIcon source={images.pin_location} />
								<UserAddressLabel>{user.address}</UserAddressLabel>
							</UserAddressWrapper>
						</UserInfoRow>
						<UserInfoButtonsContainer>
							<MessageIconReplacement onPress={messageButtonOnPress}>
								<Icon source={images.message} />
							</MessageIconReplacement>
							<CallIconReplacement onPress={() =>callButtonOnPress(user.contact_number)}>
								<Icon source={images.cell} />
							</CallIconReplacement>
						</UserInfoButtonsContainer>
					</UserInfoContainer>
					<Row>
						<Toggle onChangeToggle={onChangeToggle} defaultAs={activePage} />
					</Row>
					<ScreenToggle
						userId={user.id}
						reviews={get(user, 'broker_details.reviews', [])}
						page={activePage}
						propertyOptionOnPress={propertyOptionOnPress} />
				</ContentContainer>
			)}
		</Container>
	)
}

export default BrokerProfile