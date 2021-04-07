import React, { useRef } from 'react'
import { get } from 'lodash'
import { SafeAreaView } from 'react-native'
import Scanner from 'react-native-rectangle-scanner'
import Back from 'src/components/Back'
import {
	Container,
	ControlsContainer,
	ShutterButton,
	ShutterDesign,
	TopBar
} from './styledComponents'

export default ({ navigation, route }) => {

	const camera = useRef(null)

	const handleOnPictureProcessed = ({croppedImage}) => {
		navigation.navigate('PreviewID', {
			croppedImage,
			saveImg: get(route, 'params.saveImg', null)
		})
	}

	const onCapture = () => {
		camera.current.capture()

		// for development purposes
		// navigation.navigate("PreviewID", {
		//   croppedImage: null
		// })
	}

	return(
		<SafeAreaView style={{ flex: 1 }}>
			<Container>
				<TopBar>
					<Back navigation={navigation} color="white" />
				</TopBar>
				<Scanner
					onPictureProcessed={handleOnPictureProcessed}
					ref={camera}
					style={{flex: 0.7}}
					capturedQuality={0.6}
				/>
				<ControlsContainer>
					<ShutterButton onPress={onCapture}>
						<ShutterDesign />
					</ShutterButton>
				</ControlsContainer>
			</Container>
		</SafeAreaView>
	)
}