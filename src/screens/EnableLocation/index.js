import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native'
import { check, PERMISSIONS, request } from 'react-native-permissions';
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

    const requestPermission = async () => {
        let permission = null
        if (Platform.OS === 'ios') {
            permission = PERMISSIONS.IOS.LOCATION_ALWAYS
        } else {
            permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        }
        try {
            const location = await check(permission)
            console.log({ location })
            if (location !== 'granted') {
                await request(permission)
            }
            navigation.navigate('Welcome')
        } catch(e) {
            console.log('[ERROR]', e)
        }
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
                                <Illustration source={images.enable_location} />
                                <HeaderContainer>
                                    <Header variant="secondary" style={{ fontSize: 18 }} >Enable Permission Location</Header>
                                </HeaderContainer>
                                <HeaderContainer>
                                    <Text>
                                        Allow Snugg Neighborhood to access your location for easier discovery.
                                    </Text>
                                </HeaderContainer>
                                <ButtonContainer>
                                    <Button text="Continue" onPress={requestPermission}/>
                                </ButtonContainer>
                            </Center>
                        </Modal>
                    </PWContainer>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Container>   
    )
}