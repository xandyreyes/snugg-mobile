import React from 'react'
import { SafeAreaView } from 'react-native'
import Back from 'src/components/Back'
import {
	Container,
	Header,
	ScrollView,
	Spacer,
	SubHeader,
	Text
} from './styledComponents'

export default ({ navigation }) => {
	return(
		<Container>
			<SafeAreaView>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Back navigation={navigation} />
					<Header>Terms and Conditions</Header>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<SubHeader>I. HEADER I</SubHeader>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<SubHeader>II. HEADER II</SubHeader>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<SubHeader>III. HEADER III</SubHeader>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<SubHeader>IV. HEADER IV</SubHeader>
					<Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisi arcu. Mauris rhoncus tortor sit amet quam convallis pellentesque. Sed luctus et tellus posuere mattis. Maecenas pretium ipsum nunc, quis tincidunt velit interdum id. Integer eget magna magna. Quisque congue blandit nisi non efficitur. Praesent vitae nibh ligula. In venenatis arcu magna, id dignissim leo lacinia id. Praesent tincidunt venenatis augue, quis hendrerit ex fringilla eget. Phasellus aliquet turpis vel ullamcorper blandit.
					</Text>
					<Spacer />
					<Spacer />
					<Spacer />
					<Spacer />
					<Spacer />
					<Spacer />
				</ScrollView>
			</SafeAreaView>
			
		</Container>
	)
}