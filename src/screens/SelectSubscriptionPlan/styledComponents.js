import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
    flex: 1;
`

export const Header = styled(LinearGradient)`
    width: 100%;
    height: 230px;
    align-items: center;
    justify-content: center;
`

export const SafeAreaView = styled.SafeAreaView`
    position: absolute;
    z-index: 20;
`

export const BackContainer = styled.View`
    padding: 20px;
`

export const HeaderText = styled.Text`
    font-family: Raleway-Bold;
    color: white;
    font-size: 30px;
    text-align: center;
    marginHorizontal: 30px;
    marginVertical: 20px;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
`

export const ItemContainer = styled.View`
    border-radius: 20px;
    background: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
		margin-bottom: 27px;
		elevation: 3;
`

export const ItemTouchable = styled.TouchableOpacity`
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`

export const ItemsContainer = styled.View`
    padding-horizontal: 23px;
    margin-top: -50px;
`

export const ItemIcon = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #E2E2E2;
`

export const SubscriptionDetails = styled.View`
    margin-left: 11px;
    justify-content: center;
    width: 170px;
`

export const SubscriptionName = styled.Text`
    font-family: Raleway-Bold;
    color: #17365D;
    font-size: 20px;
`

export const SubscriptionDescription = styled.Text`
    font-family: Raleway;
    color: #3F3D56;
    font-size: 12px;
`

export const PriceContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const Price = styled.Text`
    font-family: Raleway-Bold;
    color: #3F3D56;
    font-size: 20px;
`

export const PriceMonth = styled.Text`
    font-family: Raleway-Bold;
    color: #3F3D56;
    font-size: 12px;
`

export const ModalContainer = styled.View`
    background: white;
    border-radius: 30px;
    padding: 30px;
    align-items: center;
    justify-content: center;
    width: 300px;
    align-self: center;
`

export const ModalHeader = styled.Text`
    font-family: Raleway-Bold;
    font-size: 24px;
    color: #17365D;
    text-align: center;
    margin-bottom: 8px;
`

export const ModalPrice = styled.Text`
    font-family: Raleway;
    font-size: 16px;
    color: #3F3D56;
    text-align: center;
`

export const ModalDescription = styled.Text`
    font-family: Raleway;
    font-size: 12px;
    color: #2E3743;
    text-align: center;
    margin-top: 10px;
`

export const Illustration = styled.Image`
    width: 170px;
    height: 135px;
    resize-mode: contain;
    margin-top: 25px;
`

export const ButtonContainer = styled.View`
    margin-top: 20px;
`