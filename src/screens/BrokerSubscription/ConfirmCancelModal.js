import React from 'react'
import Modal from 'react-native-modal'
import Button from 'src/components/Button'
import {
  ModalContainer,
  ModalButtonHeader,
  ModalButtonLabel,
  ButtonContainer,
} from './styledComponents'

const ConfirmCancelModal = ({ isVisible, toggleModal, cancelOnPress, goBackOnPress }) => {
	return (
		<Modal
			isVisible={isVisible}
			onBackButtonPress={toggleModal}
			onBackdropPress={toggleModal}
			useNativeDriver={true}>
			<ModalContainer>
        <ModalButtonHeader>We're sorry to see you go.</ModalButtonHeader>
        <ModalButtonLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus.</ModalButtonLabel>
				<ButtonContainer style={{marginTop:18, marginBottom: 10}}>
					<Button text="BYE" onPress={cancelOnPress} width={200} />
				</ButtonContainer>
        <ButtonContainer style={{marginTop:0,marginBottom:0}}>
					<Button text="CANCEL" onPress={goBackOnPress} width={200} inverse={true}/>
        </ButtonContainer>
			</ModalContainer>
		</Modal>
	);
}
export default ConfirmCancelModal
