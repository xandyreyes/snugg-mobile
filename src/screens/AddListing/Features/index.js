import React from 'react'
import Checkbox from 'src/components/Checkbox'
import { Features } from 'src/constants'
import {
	Column,
	Container,
	Row
} from './styledComponents'
import {
	Header
} from '../styledComponents'

export default ({ selected, onSelect }) => {

	const onToggleCheck = val => {
		onSelect(val)
	}

	return (
		<Container>
			<Header style={{ marginBottom: 9 }}>Features</Header>
			<Row>
				<Column>
					{ Features.slice(0, parseInt(Features.length/2)).map((val, index) => (
						<Checkbox 
							key={`${val}-${index}`}
							label={val}
							checked={selected.includes(val)} 
							onPress={() => onToggleCheck(val)}
						/>
					))}
				</Column>
				<Column>
					{ Features.slice(parseInt(Features.length/2), Features.length).map((val, index) => (
						<Checkbox 
							key={`${val}-${index}`}
							label={val}
							checked={selected.includes(val)} 
							onPress={() => onToggleCheck(val)}
						/>
					))}
				</Column>
			</Row>
		</Container>
	)
}