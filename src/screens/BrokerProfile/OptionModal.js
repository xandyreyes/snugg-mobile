import React from 'react'
import Modal from 'react-native-modal'
import {
	ModalButtonLabel,
	ModalButtons,
	ModalContainer,
	ModalWidthBorderBottom
} from './styledComponents'

const OptionModal = ({ isVisible, toggleModal, editOnPress, deleteOnPress }) => {
	return (
		<Modal
			isVisible={isVisible}
			onBackButtonPress={toggleModal}
			onBackdropPress={toggleModal}
			useNativeDriver={true}>
			<ModalContainer>
				<ModalWidthBorderBottom>
					<ModalButtons onPress={editOnPress}>
						<ModalButtonLabel>Edit</ModalButtonLabel>
					</ModalButtons>
				</ModalWidthBorderBottom>

				<ModalButtons last onPress={deleteOnPress}>
					<ModalButtonLabel>Delete</ModalButtonLabel>
				</ModalButtons>
			</ModalContainer>
		</Modal>
	)
}

export default OptionModal
