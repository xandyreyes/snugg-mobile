import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import Button from 'src/components/Button';
import {
    Center,
    Header,
    Input
} from 'src/components/styledComponents';
import { UserType } from 'src/constants';
import { 
    ButtonContainer,
    Container,
    Illustration,
    LoginContainer,
    LoginTextTouchable,
    RegisterAsContainer,
    Text,
    TNC
} from './styledComponents';
import images from './images';
import Toggle from './Toggle';

export default ({ navigation }) => {

    const registerData = {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        password: '',
        user_type_id: UserType.buyer
    }

    const [info, setInfo] = useState(registerData)

    const goBack = () => navigation.goBack();

    const signUp = () => {
        if (info.user_type_id === UserType.broker) {
            navigation.navigate("Capture")
        } else {
            navigation.navigate("EnableLocation")
        }
    };

    const onChangeText = (text, field) => {
        info[field] = text;
        setInfo(info)
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView 
                behavior={Platform.OS == "ios" ? "padding" : "height"} 
                flex={1}
            >
                <Container showsVerticalScrollIndicator={false}>
                    <Header>Sign Up</Header>
                    <Input placeholder="First Name" onChangeText={text => onChangeText(text, "first_name")}/>
                    <Input placeholder="Middle Name" onChangeText={text => onChangeText(text, "middle_name")}/>
                    <Input placeholder="Last Name" onChangeText={text => onChangeText(text, "last_name")}/>
                    <Input placeholder="Email" onChangeText={text => onChangeText(text, "email")} keyboardType="email-address"/>
                    <Input placeholder="Phone Number" onChangeText={text => onChangeText(text, "contact_number")} keyboardType="numeric"/>
                    <Input 
                        placeholder="Password" 
                        onChangeText={text => onChangeText(text, "password")}
                        secureTextEntry={true}
                    />
                    <RegisterAsContainer>
                        <Text>Register as a:</Text>
                        <Toggle onChangeToggle={(text, field) => onChangeText(text, field)} registerAs={"Buyer"}/>
                    </RegisterAsContainer>
                    <TNC>
                        <Center>
                            <Text>By signing up, you agree to the</Text>
                            <Text>Terms and Conditions.</Text>
                            <ButtonContainer>
                                <Button text={"SIGN UP"} onPress={signUp}/>
                            </ButtonContainer>
                        </Center>
                    </TNC>
                    <LoginContainer>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={goBack}><LoginTextTouchable>Login</LoginTextTouchable><Text>.</Text></TouchableOpacity>
                    </LoginContainer>
                    <Center>
                        <Illustration source={images.signup} />
                    </Center>
                </Container>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}