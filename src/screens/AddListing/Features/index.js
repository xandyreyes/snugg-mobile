import React from 'react'
import Checkbox from 'src/components/Checkbox'
import {
	Column,
	Container,
	Row
} from './styledComponents'
import {
	Header
} from '../styledComponents'

export default () => {

	const check = () => {
		console.log('check')
	}

	return (
		<Container>
			<Header style={{ marginBottom: 9 }}>Features</Header>
			<Row>
				<Column>
					<Checkbox label='Air conditioning' checked={true} onPress={check}/>
					<Checkbox label='Concrete Flooring' checked={true} onPress={check}/>
					<Checkbox label='Internet' checked={true} onPress={check}/>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
				</Column>
				<Column>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
					<Checkbox label='Lorem Ipsum' checked={true} onPress={check}/>
				</Column>
			</Row>
		</Container>
	)
}