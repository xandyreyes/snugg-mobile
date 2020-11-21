import React from 'react'
import {
	Container,
	Name,
	Title,
	UserImage
} from './styledComponents'

export default ({ info }) => {
	return(
		<Container>
			<UserImage source={{ uri: info.uri }} />
			<Name>{info.name}</Name>
			<Title>{info.title}</Title>
		</Container>
	)
}