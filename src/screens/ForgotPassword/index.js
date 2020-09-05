import React, { useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import {
    Center,
    Header,
    Input,
    Modal
} from 'src/components/styledComponents'
import images from './images'
import {
    BackButtonContainer,
    ButtonContainer,
    Container,
    HeaderContainer,
    Illustration,
    PWContainer,
    Text
} from './styledComponents'
export default ({ navigation }) => {

    const [email, setEmail] = useState('')

    const sendEmail = () => {
        navigation.navigate("ResetPassword")
    }

    return(
        <Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#284972', '#17365D', '#0A264A']}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"} 
                    flex={1}
                >
                    <PWContainer>
                        <BackButtonContainer>
                            <Back navigation={navigation} color="white" />
                        </BackButtonContainer>
                        <Modal>
                            <Center>
                                <Illustration source={images.forgot_password} />
                                <HeaderContainer>
                                    <Header variant="secondary" >Forgot Password</Header>
                                </HeaderContainer>
                                <HeaderContainer>
                                    <Text>
                                        Enter your registered email to reset your password
                                    </Text>
                                </HeaderContainer>
                                <HeaderContainer style={{ width: '100%' }}>
                                    <Input style={{ width: '100%' }} placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
                                </HeaderContainer>
                                <ButtonContainer>
                                    <Button text="SEND EMAIL" onPress={sendEmail}/>
                                </ButtonContainer>
                            </Center>
                        </Modal>
                    </PWContainer>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Container>   
    )
}