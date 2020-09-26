import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { size } from 'lodash' 
import { Alert } from 'react-native'
import MapView from 'react-native-maps'
import { getNearby, getPlaceDetail } from 'src/api/googlePlacesAPI'
import Back from 'src/components/Back'
import randomString from 'src/utils/randomString'
import AutocompleteResults from './AutocompleteResults'
import ButtonContainer from './ButtonContainer'
import images from './images'
import {
	BackContainer,
	Container,
	Header,
	PinImage,
	SafeAreaView,
	TopBar
} from './styledComponents'
import TextBox from './TextBox'

export default ({ navigation, route }) => {

	const { title, onNext, data } = route.params

	const [sessionToken, setSessionToken] = useState(null)
	const [results, setResults] = useState([])
	const [textValue, setTextValue] = useState('')
	const [selectedSearch, setSelectedSearch] = useState(false)

	const [region, setRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.002,
		longitudeDelta: 0.002,
	})

	useEffect(() => {
		Geolocation.getCurrentPosition(info => {
			setRegion({
				latitude: info.coords.latitude,
				longitude: info.coords.longitude,
				latitudeDelta: 0.002,
				longitudeDelta: 0.002,
			})
		})
	}, [])

	const onPressNext = () => {
		const location = {
			address: textValue,
			latitude: region.latitude,
			longitude: region.longitude
		}
		onNext(navigation, location, data)
	}

	const createSessionToken = () => {
		const token = randomString(32)
		setSessionToken(token)
	}

	const onPress = item => {
		setSessionToken(null)
		setSelectedSearch(true)
		getPlaceDetail({
			sessionToken,
			placeId: item.place_id,
		}).then( res => {
			if (res.status !== 'OK') {
				Alert.alert(
					'Unable to use this feature',
					'Please contact the developers and report this issue.'
				)
				return
			}
			console.log(res.result)
			setRegion({
				latitude: res.result.geometry.location.lat,
				longitude: res.result.geometry.location.lng,
				latitudeDelta: 0.002,
				longitudeDelta: 0.002,
			})
			setTextValue(res.result.formatted_address)
			setTimeout(() => setSelectedSearch(false), 1000)
		}).catch( e => {
			console.log(e, '[GET PLACE DETAILS ERROR]')
		})
		setResults([])
	}

	const onMapDrag = region => {
		const { latitude, longitude } = region
		setRegion(region)
		if (!selectedSearch) {
			getNearby({ latitude, longitude })
				.then( res => {
					if (res.status !== 'OK') {
						Alert.alert(
							'Unable to use this feature',
							'Please contact the developers and report this issue.'
						)
						return
					}
					const address = res.results[0]
					if (address) {
						const newValue = `${address.name}${address.vicinity ? `, ${address.vicinity}` : ''}`
						setTextValue(newValue)
					}
				}).catch( e => {
					console.log(e.response, '[GET NEARBY ERROR]')
				})
		}
	}

	return(
		<Container>
			<MapView
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%'
				}}
				region={region}
				onRegionChangeComplete={onMapDrag}
			/>
			<PinImage source={images.pin}/>
			<SafeAreaView>
				<TopBar>
					<BackContainer>
						<Back navigation={navigation}/>
					</BackContainer>
					<Header>{title}</Header>
				</TopBar>
				<TextBox value={textValue} onChangeText={setTextValue} region={region} onFocus={createSessionToken} sessionToken={sessionToken} setResults={setResults} />
			</SafeAreaView>
			{ size(results) > 0 && (
				<AutocompleteResults items={results} onPress={onPress} />
			) }
			<ButtonContainer onPress={onPressNext} />
		</Container>
	)
}