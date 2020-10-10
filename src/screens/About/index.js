import React from 'react'
import { SafeAreaView } from 'react-native'
import Back from 'src/components/Back'
import images from './images'
import { partners, team } from './hardcodedData'
import {
	Check,
	Container,
	Header,
	PartnerLogo,
	PartnersContainer,
	Row,
	ScrollView,
	Spacer,
	SubHeader,
	SubHeader2,
	Text
} from './styledComponents'
import Team from './Team'

export default ({ navigation }) => {
	return(
		<Container>
			<SafeAreaView>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Back navigation={navigation} />
					<Header>About Snugg Neighborhood</Header>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<SubHeader>OUR SERVICES</SubHeader>
					<Text>
                        Snugg Neighborhood aims to revolutionize Real Estate by producing the best agents in the industry.
					</Text>
					<Row>
						<Check source={images.check} />
						<SubHeader2>Listing & Selling</SubHeader2>
					</Row>
					<Text>
                        Market your properties with us as we offer them to other homebuyers and an extensive network of professional realtors.
					</Text>
					<Row>
						<Check source={images.check} />
						<SubHeader2>Buying & Leasing</SubHeader2>
					</Row>
					<Text>
                        Get real time listings by sending us your preferred property types and locations so we can tailor fit options just for you.
					</Text>
					<Spacer />
					<SubHeader>PARTNERSHIPS</SubHeader>
					<Text>We are affiliated with broker network groups of over 500 Real Estate Professionals and various Property Developers from all over Metro Manila and nearby provinces.</Text>
					<PartnersContainer>
						{ partners.map( (partner) => (<PartnerLogo source={images[partner]} alt={partner} key={partner} />))}
					</PartnersContainer>
					<Spacer />
					<SubHeader>THE TEAM</SubHeader>
					<Text>Who you work with matters</Text>
					<PartnersContainer>
						{ team.map( (user) => (<Team info={user} key={user.userId} />))}
					</PartnersContainer>
					<Spacer style={{ height: 80 }} />
				</ScrollView>
			</SafeAreaView>
			
		</Container>
	)
}