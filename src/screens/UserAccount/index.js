import React from 'react'
import { get } from 'lodash'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import {
	Button,
	ButtonContainer,
	ButtonLabel,
	Container,
	ContentContainer,
	UserAddressIcon,
	UserAddressLabel,
	UserAddressWrapper,
	UserImage,
	UserInfoContainer,
	UserNameLabel,
	UserSubscriptionLabel,
	UserSubscriptionWrapper
} from './styledComponents'
import images from './images'

const UserAccount = ({ navigation }) => {

	const { User } = Store
	console.log({ User: User.data })

	const UserButton = ({children, ...rest}) => {
		return (
			<Button {...rest}>
				<ButtonLabel>{children}</ButtonLabel>
			</Button>
		)
	}

	const logout = () => {
		User.logout()
	}

	return (
		<Container>
			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserInfoContainer>
					<UserImage />
					<UserNameLabel>{`${get(User, 'data.firstname', '')} ${get(User, 'data.middlename', '')} ${get(User, 'data.lastname', '')}`}</UserNameLabel>
					<UserAddressWrapper>
						<UserAddressIcon source={images.pin_location} />
						<UserAddressLabel>
							{get(User, 'data.address', 'Philippines')}
						</UserAddressLabel>
					</UserAddressWrapper>
					{ User.data.type_id === UserType.broker && (
						<UserSubscriptionWrapper>
							<UserSubscriptionLabel>
								Free Trial
							</UserSubscriptionLabel>
						</UserSubscriptionWrapper>
					)}
				</UserInfoContainer>
				<ButtonContainer>
					<UserButton onPress={() => navigation.navigate('UserAccountSettings')}>
						User Account Settings
					</UserButton>
					<UserButton>Change Password</UserButton>
					{ User.data.type_id === UserType.broker && (
						<>
							<UserButton>Subscription</UserButton>
							<UserButton onPress={() => navigation.navigate('BrokerProfile')}>
								My Properties
							</UserButton>
						</>
					) }
					{ User.data.type_id === UserType.buyer && (
						<>
							<UserButton>Liked Properties</UserButton>
						</>
					) }
				</ButtonContainer>
				<ButtonContainer>
					<UserButton>About Snugg Neighborhood</UserButton>
					<UserButton>Terms & Condition</UserButton>
					<UserButton onPress={logout}>Logout</UserButton>
				</ButtonContainer>
			</ContentContainer>
		</Container>
	)
}

export default UserAccount