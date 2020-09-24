import React, { useState } from 'react'
import { remove } from 'lodash'
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

	const [features, setSelectedFeatures] = useState(selected)

	const onToggleCheck = val => {
		if (features.includes(val)) {
			remove(features, item => item === val)
		} else {
			features.push(val)
		}
		setSelectedFeatures([...features])
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
							checked={features.includes(val)} 
							onPress={() => onToggleCheck(val)}
						/>
					))}
				</Column>
				<Column>
					{ Features.slice(parseInt(Features.length/2), Features.length).map((val, index) => (
						<Checkbox 
							key={`${val}-${index}`}
							label={val}
							checked={features.includes(val)} 
							onPress={() => onToggleCheck(val)}
						/>
					))}
				</Column>
			</Row>
		</Container>
	)
}