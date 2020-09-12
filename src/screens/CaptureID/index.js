import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Button from 'src/components/Button'
import { Center, Header } from 'src/components/styledComponents'
import images from './images'
import {
	BackImage,
	ButtonContainer,
	CaptureContainer,
	Container,
	ContentContainer,
	Image,
	InstructionContainer,
	InstructionText,
	Paragraph
} from './styledComponents'

export default ({ navigation }) => {
	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FFF', '#FFF', '#E8E8E8']}>
			<SafeAreaView style={{ flex: 1 }}>
				<CaptureContainer>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<BackImage source={images.back} />
					</TouchableOpacity>
					<ContentContainer>
						<Center>
							<Header>Confirm your identity</Header>
						</Center>
						<Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis risus. Proin condimentum felis eu odio tempor, ut pharetra arcu vulputate.
						</Paragraph>
						<Center>
							<Image source={images.captureID} />
						</Center>
						<InstructionContainer>
							<InstructionText>
                                Please take a photo of your PRC ID to continue registration
							</InstructionText>
						</InstructionContainer>
						<ButtonContainer>
							<Center>
								<Button text="CAPTURE ID" onPress={() => navigation.navigate('CameraCapture')} />
							</Center>
						</ButtonContainer>
					</ContentContainer>
				</CaptureContainer>
			</SafeAreaView>
		</Container>
	)
}