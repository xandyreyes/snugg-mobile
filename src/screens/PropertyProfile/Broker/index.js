import React from 'react'
import {
	BadgeContainer,
	BadgeText,
	BrokerImage,
	BrokerInfoContainer,
	Container,
	Header,
	MainRow,
	Row
} from './styledComponents'

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
                    
                </Row>
			</MainRow>
		</Container>
	)
}