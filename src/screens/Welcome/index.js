import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native'
import Button from 'src/components/Button'
import {
    Center,
    Header,
    Modal
} from 'src/components/styledComponents'
import images from './images'
import {
    ButtonContainer,
    Container,
    HeaderContainer,
    Illustration,
    PWContainer,
    Text
} from './styledComponents'

export default ({ navigation }) => {

    const start = () => {
        alert('Start')
    }

    return(
        <Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"} 
                    flex={1}
                >
                    <PWContainer>
                        <Modal>
                            <Center>
                                <Illustration source={images.welcome} />
                                <HeaderContainer>
                                    <Center>
                                        <Header variant="secondary" style={{ fontSize: 18 }} >Welcome to</Header>
                                        <Header variant="secondary" style={{ fontSize: 18 }} >Snugg Neighborhood!</Header>
                                    </Center>
                                </HeaderContainer>
                                <HeaderContainer>
                                    <Text>
                                        Let's get you settled in!
                                    </Text>
                                </HeaderContainer>
                                <ButtonContainer>
                                    <Button text="Start" onPress={start}/>
                                </ButtonContainer>
                            </Center>
                        </Modal>
                    </PWContainer>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Container>   
    )
}