import React from 'react'
import { Store } from 'src/store'
import {
	Container,
	Header,
	Text
} from './styledComponents'

export default () => {
	return(
		<Container>
			<Header style={{ textAlign: 'left' }}>
        Hi, {Store.User.data.firstname}!
			</Header>
			<Text>Welcome back to Snugg Neighborhood!</Text>
		</Container>
	)
}