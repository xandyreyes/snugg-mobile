import React from 'react'
import {
  Container,
  Header,
  Wrapper,
  Block,
  CheckIcon,
  Label
} from './styledComponents'
import images from '../images'

const features = [
  'Air Conditioning',
  'Balcony',
  'Concrete Flooring',
  'Garage',
  'Appliances',
  'Bedding',
  'Fully Furnished',
  'Heating'
]

const Features = () => {
  return (
    <Container>
      <Header>Features</Header>
      <Wrapper>
        {features.map((feat, index) =>
          <Block key={index}>
            <CheckIcon source={images.check} />
            <Label>{feat}</Label>
          </Block>
        )}
      </Wrapper>
    </Container>
  )
}

export default Features
