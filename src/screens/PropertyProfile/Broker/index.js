import React from 'react'
import {
	BadgeContainer,
	BadgeText,
	BrokerImage,
	BrokerInfoContainer,
	Container,
	Header,
	MainRow,
	Row,
  MessageButton,
  CallButton,
  MessageIcon,
  CallIcon
} from './styledComponents'
import images from '../images'

export default () => {
	return(
		<Container>
			<Header>Broker</Header>
			<MainRow>
				<Row>
					<BrokerImage />
					<BrokerInfoContainer>
						<Header>John Doe</Header>
						<BadgeContainer>
							<BadgeText>Licensed Broker</BadgeText>
						</BadgeContainer>
					</BrokerInfoContainer>
				</Row>
        <Row>
          <MessageButton>
            <MessageIcon source={images.message} />
          </MessageButton>
          <CallButton>
            <CallIcon source={images.cell} />
          </CallButton>
        </Row>
			</MainRow>
		</Container>
	)
}