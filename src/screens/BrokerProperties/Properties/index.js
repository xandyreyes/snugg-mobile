import React, {useState, useEffect} from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import images from '../images'
import {
	AdditionalInfo,
	AddressIcon,
	AddressLabel,
	AddressWrapper,
	CardAbsoluteHeader,
	CardContainer,
	CardContent,
	CardHeader,
	CardHeaderLabel,
	CardImage,
	CardImageContainer,
	CardInfo,
	CardInfoIcon,
	CardInfoLabel,
	HeartIcon,
	LikeLabel,
	LikesWrapper,
	OptionButton,
	OptionIcon,
	PriceLabel,
	PriceWrapper,
	Verified,
  LoadingWrapper,
  PaginationWrapper,
  PaginationText
} from './styledComponents'
import Swiper from 'react-native-swiper'
import {
  getListingAPI,
  deleteListingAPI
} from '../../../api/listing'
import { Store } from 'src/store'
import OptionModal from '../OptionModal'

const formatMoney = (amount, decimalCount = 2, decimal = '.', thousands = ',') => {
	try {
		decimalCount = Math.abs(decimalCount)
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount
		const negativeSign = amount < 0 ? '-' : ''
		let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
		let j = (i.length > 3) ? i.length % 3 : 0
		return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')
	} catch (e) {
		console.log(e)
	}
}

const infoList = [
  { key:'bedroom_count', label:'Bed/s' },
  { key:'toilet_bath_count', label:'T&B' },
  { key:'floor_area', label:'sqm' },
  { key:'garage', label:'Garage' },
  // { key:'listing_type' },
]

const arr = [
	{
    image_url: 'https://static-assets.profiles.hallyulife.com/lalisa-manoban-photo-welcoming-collection.jpg',
    deleted: 0
	},
	{
		image_url: 'https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2018/11/cover-BLACKPINK-Rose-Instagram-Photo-26-November-2018-furr-coat.jpg',
    deleted: 0
	},
	{
		image_url: 'https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/roseblackpink1.png',
    deleted: 1
	}
]

const Properties = ({ page }) => {

  const { data } = Store.User;
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)
	const [selectedProperty, setSelectedProperty] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    getListing();
  }, [])

  const getListing = async () => {
    setLoading(true)
    try {
      const res = await getListingAPI(data.id);
      setLoading(false)
      setProperties(res.data);
    } catch(e) {
      console.log(e.response);
      setLoading(false)
    }
  }

  const renderPagination = (index, total, context) => {
    return (
      <PaginationWrapper>
        <PaginationText>
          {index + 1}/{total}
        </PaginationText>
      </PaginationWrapper>
    )
  }

  const optionsOnPress = (d) => () => {
    setSelectedProperty(d);
    toggleModalVisible();
  }

	const toggleModalVisible = () => {
		setModalVisible(!modalVisible)
	}

	const editOnPress = () => {

	}

	const deleteOnPress = () => {
    Alert.alert(
      'Delete Listing',
      'Are you sure you want to delete this listing?',
      [
        {
          text: 'OK',
          onPress: async () => {
            try {
              await deleteListingAPI(selectedProperty.id);
              getListing();
              toggleModalVisible();
            } catch(e) {
              console.log('[ERROR DELETE]', e.response.data);
              Alert.alert('Error', e.response.data.message ? e.response.data.message : 'Server Error');
            }
          }
        }, {
          text: 'Cancel'
        }
      ],
      { cancelable: false }
    )
	}

  return (
    <>
      <OptionModal
        isVisible={modalVisible}
        toggleModal={toggleModalVisible}
        editOnPress={editOnPress}
        deleteOnPress={deleteOnPress}
      />

      {page === 'Properties' &&
        loading ? (
          <LoadingWrapper>
            <ActivityIndicator color='#EC7050' size='large' />
          </LoadingWrapper>
        ) : properties.map((d, index) =>
          <CardContainer key={index} first={index === 0}>
            <CardAbsoluteHeader>
              <LikesWrapper>
                <HeartIcon />
                <LikeLabel>{d.likes} Likes</LikeLabel>
              </LikesWrapper>
              <OptionButton onPress={optionsOnPress(d)}>
                <OptionIcon />
              </OptionButton>
            </CardAbsoluteHeader>
            <CardImageContainer>
              <PriceWrapper>
                <PriceLabel>P{formatMoney(d.price, 0)}</PriceLabel>
              </PriceWrapper>
              <Swiper
                autoplay={false}
                activeDotColor={'#EC7050'}
                renderPagination={renderPagination}>
                {/* {d.images.filter(i => i.deleted === 0).map((img, index) =>
                  <CardImage key={index} source={{ uri: img.image_url }} />
                )} */}
                {arr.filter(i => i.deleted === 0).map((img, index) =>
                  <CardImage key={index} source={{ uri: img.image_url }} />
                )}
              </Swiper>
            </CardImageContainer>
            <CardContent>
              <CardHeader>
                <CardHeaderLabel>{d.name}</CardHeaderLabel>
                <Verified source={images.verified} />
              </CardHeader>
              <AddressWrapper>
                <AddressIcon source={images.pin_location} />
                <AddressLabel>{d.address}</AddressLabel>
              </AddressWrapper>
              <AdditionalInfo>
                {infoList.map((info, idx) =>
                  d[info.key] ? (
                    <CardInfo key={idx}>
                      <CardInfoIcon source={images.bath} />
                      <CardInfoLabel>
                        {`${d[info.key]} ${info.label}`}
                      </CardInfoLabel>
                    </CardInfo>
                  ) : null
                )}
              </AdditionalInfo>
            </CardContent>
          </CardContainer>
        )
      }
    </>
  )
}

export default Properties
