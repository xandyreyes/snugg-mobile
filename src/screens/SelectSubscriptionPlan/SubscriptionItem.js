import React from 'react'
import {
    ItemContainer,
    ItemIcon,
    ItemTouchable,
    Price,
    PriceContainer,
    PriceMonth,
    SubscriptionDescription,
    SubscriptionDetails,
    SubscriptionName
} from './styledComponents'

export default ({ id, name, no_of_listing, price, index, onPress }) => {
    return(
        <ItemContainer>
            <ItemTouchable onPress={() => onPress(index)}>
                <ItemIcon />
                <SubscriptionDetails>
                    <SubscriptionName>{name}</SubscriptionName>
                    { no_of_listing ? (
                        <SubscriptionDescription>{`Post up to ${no_of_listing} Properties`}</SubscriptionDescription>
                    ) : (
                        <SubscriptionDescription>{`Post unlimited number of properties`}</SubscriptionDescription>
                    ) }
                </SubscriptionDetails>
                <PriceContainer>
                    <Price>{price > 0 && 'P'}{price > 0 ? price : 'FREE'}</Price>
                    { price > 0 && (<PriceMonth>/MONTH</PriceMonth>) }
                </PriceContainer>
            </ItemTouchable>
        </ItemContainer>
    )
}