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
import { Store } from 'src/store'
import images from './images'

const BrokerProfile = ({ navigation }) => {

  const { data } = Store.User;
  const buttonSet = [
    [
      {
        path: 'BrokerAccountSettings',
        label: 'User Account Settings'
      }, {
        path: null,
        label: 'Change Password'
      }, {
        path: null,
        label: 'Subscription'
      }, {
        path: 'BrokerProperties',
        label: 'My Properties'
      }
    ], [
      {
        path: null,
        label: 'About Snugg Neighborhood'
      }, {
        path: null,
        label: 'Terms & Condition'
      }, {
        path: null,
        label: 'Logout'
      }
    ]
  ]

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
          <UserNameLabel>
            {`${data.firstname} ${data.lastname}`}
          </UserNameLabel>
					<UserAddressWrapper>
						<UserAddressIcon source={images.pin_location} />
						<UserAddressLabel>
							{data.address}
						</UserAddressLabel>
					</UserAddressWrapper>
					<UserSubscriptionWrapper>
						<UserSubscriptionLabel>
							Free Trial
						</UserSubscriptionLabel>
					</UserSubscriptionWrapper>
				</UserInfoContainer>
        {buttonSet.map((bs, bsIndex) =>
          <ButtonContainer key={bsIndex}>
            {bs.map((button, index) =>
              <UserButton
                key={index}
                onPress={() => button.path ? navigation.navigate(button.path) : {}}>
                {button.label}
              </UserButton>
            )}
          </ButtonContainer>
        )}
			</ContentContainer>
		</Container>
	)
}

export default BrokerProfile