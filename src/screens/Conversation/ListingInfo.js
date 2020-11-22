import React from 'react'
import {
  ListingWrapper,
  ListingImage,
  ListingInfoWrapper,
  ListingName,
  ListingAddressWrapper,
  AddressIcon,
  AddressLabel,
  ListingAdditionalInfo,
  CardInfo,
  CardInfoIcon,
  CardInfoLabel,
  ListingPrice
} from './styledComponents'
import formatMoney from 'src/utils/formatMoney'
import images from './images';

const listingInfo = {
  name: 'Lorem Ipsum',
  image: require('src/assets/images/property-1.jpg'),
  address: 'Bonifacio Global City',
  floor_area: 70,
  bedroom_count: 2,
  toilet_bath_count: 2,
  price: '9000000000'
}

const ListingInfo = () => {
  return (
    <ListingWrapper>
      <ListingImage source={listingInfo.image} />
      <ListingInfoWrapper>
        <ListingName>{listingInfo.name}</ListingName>
        <ListingAddressWrapper>
          <AddressIcon source={images.pin_location} />
          <AddressLabel>{listingInfo.address}</AddressLabel>
        </ListingAddressWrapper>
        <ListingAdditionalInfo>
          {listingInfo.bedroom_count > 0 && (
            <CardInfo>
              <CardInfoIcon source={images.bed} />
              <CardInfoLabel>
                {listingInfo.bedroom_count} Bedrooom/s
              </CardInfoLabel>
            </CardInfo>
          )}
          {listingInfo.toilet_bath_count > 0 && (
            <CardInfo>
              <CardInfoIcon source={images.bath} />
              <CardInfoLabel>
                {listingInfo.toilet_bath_count} T&B
              </CardInfoLabel>
            </CardInfo>
          )}
          {listingInfo.floor_area > 0 && (
            <CardInfo>
              <CardInfoIcon source={images.area} />
              <CardInfoLabel>
                {listingInfo.floor_area} sqm
              </CardInfoLabel>
            </CardInfo>
          )}
        </ListingAdditionalInfo>
        <ListingPrice>{formatMoney(listingInfo.price, 0)}</ListingPrice>
      </ListingInfoWrapper>
    </ListingWrapper>
  )
}

export default ListingInfo
