import React, { useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { UserType } from 'src/constants';
import {
    ButtonTouchable,
    ToggleContainer,
    ToggleText,
    SelectedContainer
} from './styledComponents';

const width = Dimensions.get('window').width;

export default ({ onChangeToggle, registerAs }) => {
    
    const toggleAnimation = useRef(new Animated.Value(0)).current;
    const [selected, select] = useState(registerAs);

    const selectBuyer = () => {
        Animated.timing(
            toggleAnimation,
            {
              toValue: 0,
              duration: 200,
              useNativeDriver: true
            }
        ).start();
        select('Buyer');
        onChangeToggle(UserType.buyer, "user_type");
    }

    const selectBroker = () => {
        Animated.timing(
            toggleAnimation,
            {
              toValue: (width - 60) / 2,
              duration: 200,
              useNativeDriver: true
            }
        ).start();
        select('Broker');
        onChangeToggle(UserType.broker, "user_type");
    }

    return(
        <ToggleContainer>
            <Animated.View style={{
                position: 'absolute',
                height: 42,
                width: '100%',
                transform: [{
                    translateX: toggleAnimation
                }]
            }}>
                <SelectedContainer/>
            </Animated.View>
            <ButtonTouchable onPress={selectBuyer}>
                <ToggleText selected={selected === "Buyer"}>Buyer</ToggleText>
            </ButtonTouchable>
            <ButtonTouchable onPress={selectBroker}>
                <ToggleText selected={selected === "Broker"}>Broker</ToggleText>
            </ButtonTouchable>
        </ToggleContainer>
    )
}