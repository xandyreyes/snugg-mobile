import { Alert } from 'react-native'
import { createRef, uploadToFirebase } from 'src/api/imageUpload'

export default async ({ storageName, uploadUri }) => {
	try {
		const instance = createRef(storageName)
		await uploadToFirebase(instance, uploadUri)
		const url = await instance.getDownloadURL()
		return url
	} catch (err) {
		console.log(err, '[IMAGE UPLOAD ERROR]')
		Alert.alert(
			'Unable to upload file',
			'The file cannot be uploaded to our storage.',
			[
				{
					text: 'OK'
				}
			]
		)
		return Promise.reject(err)
	}
}