import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background: white;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`

export const ScrollView = styled.ScrollView`
    padding: 20px;
`

export const TopBar = styled.View`
    flex-direction: row;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 3px 3px rgba(0,0,0,0.1);
`

export const Header = styled.Text`
    color: #17365D;
    font-family: Raleway-Bold;
    font-size: 16px;
`

export const Next = styled.Text`
    color: #17365D;
    font-family: Raleway-Regular;
    font-size: 12px;
    text-align: center;
`

export const UploadPhotosTouchable = styled.TouchableOpacity`
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
`

export const UploadPhotosIcon = styled.Image`
    width: 15px;
    height: 14px;
    resize-mode: contain;
    margin-bottom: 5px;
`

export const UploadATS = styled.TouchableOpacity`
    width: 100%;
    border-radius: 8px;
    background: #17365D;
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 80px;
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 12px;
    font-family: Raleway-Regular;
`