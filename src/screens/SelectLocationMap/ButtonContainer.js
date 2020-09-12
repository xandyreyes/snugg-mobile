import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from 'src/components/Button'
import {
    ButtonContainer
} from './styledComponents'

export default ({ onPress }) => {
    return(
        <ButtonContainer>
            <SafeAreaView>
                <Button text="NEXT" width={150} onPress={onPress} />
            </SafeAreaView>
        </ButtonContainer>
    )
}