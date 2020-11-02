import React, { useEffect, useState } from 'react'
import { ListingType, OfferType } from 'src/constants'
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
	tint-color: white;
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
const cash = require('src/assets/images/cash.png')
const home = require('src/assets/images/home.png')
const stairs = require('src/assets/images/stairs.png')
const garage = require('src/assets/images/stairs.png')

export default ({ value, label }) => {

	const [icon, setIcon] = useState()
	const [text, setText] = useState('')
    
	useEffect(() => {
		switch (label) {
		case 'bedroom':
			setIcon(bedroom)
			setText(`${value} Bed/s`)
			return
		case 'baths':
			setIcon(bath)
			setText(`${value} T&B/s`)
			return
		case 'garage':
			setIcon(garage)
			setText(`${value} Car/s`)
			return
		case 'floor_area':
			setIcon(floor_area)
			setText(`${value} sqm`)
			return
		case 'listing_type':
			if (value === ListingType.condo) {
				setIcon(condo)
				setText('Condo')
			}
			if (value === ListingType.house_and_lot){
				setIcon(home)
				setText('House & Lot')
			}
			return
		case 'offer_type':
			setIcon(cash)
			if (value === OfferType.sale) {
				setText('Sale')
			}
			if (value === OfferType.rent) {
				setText('Rent')
			}
			return
		case 'floor_count':
			setIcon(stairs)
			setText(`${value} Floor/s`)
			return
		}
	}, [value, label])

	if (value && label) {
		return(
			<Container>
				<Icon source={icon} />
				<Text>{text}</Text>
			</Container>
		)
	}

	return null
}