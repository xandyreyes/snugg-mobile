import React from 'react'
import Modal from 'react-native-modal'
import Button from 'src/components/Button'
import images from './images'
import {
	ButtonContainer,
	Illustration,
	ModalContainer,
	ModalDescription,
	ModalHeader,
	ModalPrice,
} from './styledComponents'

export default ({ visible, subscription, close, onSubscribe }) => {
	return(
		<Modal 
			isVisible={visible} 
			style={{ zIndex: 100 }}
			onBackdropPress={close}
		>
			<ModalContainer>
				<ModalHeader>{subscription.name}</ModalHeader>
				{ subscription.price > 0 ? (
					<ModalPrice>{`P${subscription.price} / month`}</ModalPrice>
				) : (<ModalPrice>{'Free for 14 days'}</ModalPrice>)  }
				{ subscription.no_of_listing ? (
					<ModalDescription>{`Post up to ${subscription.no_of_listing} property listings with this plan.`}</ModalDescription>
				) : (
					<ModalDescription>{'Post unlimited number of property listings with this plan.'}</ModalDescription>
				) }
				<Illustration source={images.subscription} />
				<ButtonContainer >
					<Button text="SUBSCRIBE" width={180} onPress={onSubscribe}/>
				</ButtonContainer>
			</ModalContainer>
		</Modal>
	)
}