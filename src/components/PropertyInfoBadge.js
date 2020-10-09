import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.View`
    background: #EC7050;
    border-radius: 10px;
    padding: 3px 7px;
    flex-direction: row;
    align-items: center;
    margin: 3px 9px 4px 0px;
`

const Icon = styled.Image`
    width: 9px;
    height: 9px;
    resize-mode: contain;
    margin-right: 5px;
`

const Text = styled.Text`
    font-family: Raleway-Regular;
    font-size: 12px;
    color: white;
`

const bedroom = require('src/assets/images/bed.png')
const bath = require('src/assets/images/bath.png')
const floor_area = require('src/assets/images/area.png')
const condo = require('src/assets/images/condo.png')

export default ({ value, label }) => {

	const [icon, setIcon] = useState()
    
	useEffect(() => {
		switch (label) {
		case 'bedroom':
			setIcon(bedroom)
			return
		case 'baths':
			setIcon(bath)
			return
		case 'floor_area':
			setIcon(floor_area)
			return
		case 'listing_type':
			setIcon(condo)
			return
		}
	}, [])

	return(
		<Container>
			<Icon source={icon} />
			<Text>{value}</Text>
		</Container>
	)
}