/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Snugg from './src/screens'

const App = () => {
	return (
		<NavigationContainer>
			<Snugg />
		</NavigationContainer>
	)
}

export default App
