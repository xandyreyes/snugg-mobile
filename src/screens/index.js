import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Observer, Provider } from 'mobx-react'
import { Store } from 'src/store'
import commonScreens from './routes/commonScreens'
import userScreens from './routes/userScreens'
import authScreens from './routes/authScreens'
import LoadingScreen from './LoadingScreen'

const Stack = createStackNavigator()

export default () => {

	useEffect(() => {
		Store.hydrate()
	}, [])
  
	return(
		<Provider store={Store}>
			<Observer>
				{() => {
					const {loading, access_token} = Store.User
					if(loading) {
						return <LoadingScreen />
					} else {
						const initialRouteName = access_token ? 'Home' : 'Login'
						return (
							<Stack.Navigator initialRouteName={initialRouteName}>
								{[...commonScreens, ...(Store.User.access_token ? userScreens : authScreens)]
									.map((screen, index) =>
										<Stack.Screen
											key={index}
											name={screen.name}
											component={screen.component}
											options={screen.options}
										/> 
									)}
							</Stack.Navigator>
						)
					}
				}}
			</Observer>
		</Provider>
	)
}