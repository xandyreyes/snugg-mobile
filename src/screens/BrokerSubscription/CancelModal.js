import React, { useState } from 'react'
import Modal from 'react-native-modal'
import Button from 'src/components/Button'
import {
  ModalContainer,
  ModalButtonHeader,
  ModalButtonLabel,
  ButtonContainer,
} from './styledComponents'
import ConfirmCancelModal from './ConfirmCancelModal'

const CancelModal = ({ isVisible, toggleModal, cancelOnPress, goBackOnPress }) => {
	const [confirmCancelModalVisible, setConfirmCancelModalVisible] = useState(false)
	
	const toggleConfirmCancelModalVisible = () => {
		setConfirmCancelModalVisible(!confirmCancelModalVisible)
	}
	
	const onConfirmCancel = () => {
		toggleConfirmCancelModalVisible()
		cancelOnPress()
	}
	return (
		<Modal
			isVisible={isVisible}
			onBackButtonPress={toggleModal}
			onBackdropPress={toggleModal}
			useNativeDriver={true}>
			<ConfirmCancelModal
				isVisible={confirmCancelModalVisible}
				toggleModal={toggleConfirmCancelModalVisible}
				cancelOnPress={onConfirmCancel}
				goBackOnPress={()=>setConfirmCancelModalVisible(false)}
			/>
			<ModalContainer>
        <ModalButtonHeader>Are you sure you want to cancel your subscription?</ModalButtonHeader>
        <ModalButtonLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus.</ModalButtonLabel>
				<ButtonContainer style={{marginTop:18, marginBottom: 10}}>
					<Button text="CANCEL SUBSCRIPTION" onPress={toggleConfirmCancelModalVisible} width={200} />
				</ButtonContainer>
        <ButtonContainer style={{marginTop:0,marginBottom:0}}>
					<Button text="GO BACK" onPress={goBackOnPress} width={200} inverse={true}/>
        </ButtonContainer>
			</ModalContainer>
		</Modal>
	);
}
export default CancelModal
