/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import messaging from '@react-native-firebase/messaging'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Snugg from './src/screens'

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage)
})

const App = () => {
	return (
		<NavigationContainer>
			<Snugg />
		</NavigationContainer>
	)
}

export default App
