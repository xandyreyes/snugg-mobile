import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import Back from 'src/components/Back'
import ButtonContainer from './ButtonContainer'
import {
    BackContainer,
    Container,
    Header,
    SafeAreaView,
    TopBar
} from './styledComponents'
import TextBox from './TextBox'

export default ({ navigation }) => {

    const [coordinate, setCoordinate] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [initialRegion, setInitialRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    useEffect(() => {
        // TODO: Get user's current location and set it as the initial region and Marker coordinate
        Geolocation.getCurrentPosition(info => console.log(info));
    }, [])

    const onPressNext = () => {
        navigation.navigate('SelectSubscriptionPlan')
    }

    return(
        <Container>
            <MapView
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
                initialRegion={initialRegion}
            >
                <Marker 
                    draggable 
                    coordinate={coordinate}
                    onDragEnd={(e) => setCoordinate(e.nativeEvent.coordinate)}
                />
            </MapView>
            <SafeAreaView>
                <TopBar>
                    <BackContainer>
                        <Back navigation={navigation}/>
                    </BackContainer>
                    <Header>Enter your location</Header>
                </TopBar>
                <TextBox />
            </SafeAreaView>
            <ButtonContainer onPress={onPressNext} />
        </Container>
    )
}