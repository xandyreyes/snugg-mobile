import React, { useMemo } from 'react'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import {
	Header,
	Modal
} from 'src/components/styledComponents'
import images from './images'
import { 
	BackContainer,
	Container,
	ContentContainer,
	Heading2,
	MatchIllustration,
	ModalContainer,
	SafeAreaView,
	Text
} from './styledComponents'

export default ({ route, navigation }) => {

	const { name, user } = route.params
	const userInfo = useMemo(() => JSON.parse(user), [user])

	const goToUserMessage = () => {
		alert('User')
	}

	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
			<SafeAreaView>
				<BackContainer>
					<Back navigation={navigation} color={'white'} />
				</BackContainer>
				<ModalContainer>
					<Modal>
						<ContentContainer>
							<Header>{'It\'s a Match!'}</Header>
							<Heading2>{`You matched with ${userInfo.firstname || name}!`}</Heading2>
							<MatchIllustration source={images.match} />
							<Text>{`Send ${userInfo.firstname || name} a message to start a deal.`}</Text>
							<Button text="SEND MESSAGE" width={180} onPress={goToUserMessage}/>
						</ContentContainer>
					</Modal>
				</ModalContainer>
			</SafeAreaView>
		</Container>
	)
}