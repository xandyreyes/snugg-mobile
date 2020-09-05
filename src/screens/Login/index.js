import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import Button from 'src/components/Button';
import { Header, Input } from 'src/components/styledComponents';
import images from './images';
import {
    Center,
    Container,
    HouseIllustration,
    Illustrations,
    LoginContainer,
    Logo,
    Text,
    TextHighlight
} from './styledComponents';

export default ({ navigation }) => {
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"} 
            flex={1}
        >
            <Container>
                <Illustrations>
                    <Logo source={images.logo} />
                    <HouseIllustration source={images.login}/>
                </Illustrations>
                <LoginContainer>
                    <Header>Login</Header>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" secureTextEntry={true} />
                    <Center>
                        <TouchableOpacity style={{ marginVertical: 22 }} onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text>Forgot Password?</Text>
                        </TouchableOpacity>
                    </Center>
                    <Center>
                        <Button text={"LOGIN"} width={168} />
                    </Center>
                    <Center style={{ marginVertical: 22 }}>
                        <Text>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <TextHighlight>Sign Up</TextHighlight>
                        </TouchableOpacity>
                    </Center>
                </LoginContainer>
            </Container>
        </KeyboardAvoidingView>
    )
}