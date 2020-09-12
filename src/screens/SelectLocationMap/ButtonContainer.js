import React from 'react'
import { SafeAreaView } from 'react-native'
import Button from 'src/components/Button'
import {
    ButtonContainer
} from './styledComponents'

export default () => {
    return(
        <ButtonContainer>
            <SafeAreaView>
                <Button text="NEXT" width={150} />
            </SafeAreaView>
        </ButtonContainer>
    )
}