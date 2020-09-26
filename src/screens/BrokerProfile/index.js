import React from 'react'
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

const BrokerProfile = ({ navigation }) => {
	const UserButton = ({children, ...rest}) => {
		return (
			<Button {...rest}>
				<ButtonLabel>{children}</ButtonLabel>
			</Button>
		)
	}

	return (
		<Container>
			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserInfoContainer>
					<UserImage />
					<UserNameLabel>John Doe</UserNameLabel>
					<UserAddressWrapper>
						<UserAddressIcon source={images.pin_location} />
						<UserAddressLabel>
              Greenhills, San Juan City
						</UserAddressLabel>
					</UserAddressWrapper>
					<UserSubscriptionWrapper>
						<UserSubscriptionLabel>
              Free Trial
						</UserSubscriptionLabel>
					</UserSubscriptionWrapper>
				</UserInfoContainer>
				<ButtonContainer>
					<UserButton onPress={() => navigation.navigate('BrokerAccountSettings')}>
            User Account Settings
					</UserButton>
					<UserButton>Change Password</UserButton>
					<UserButton>Subscription</UserButton>
					<UserButton onPress={() => navigation.navigate('BrokerProperties')}>
            My Properties
					</UserButton>
				</ButtonContainer>
				<ButtonContainer>
					<UserButton>About Snugg Neighborhood</UserButton>
					<UserButton>Terms & Condition</UserButton>
					<UserButton>Logout</UserButton>
				</ButtonContainer>
			</ContentContainer>
		</Container>
	)
}

export default BrokerProfile