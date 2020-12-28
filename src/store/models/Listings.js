import AsyncStorage from '@react-native-community/async-storage'
import { applySnapshot, flow, types } from 'mobx-state-tree'

export const Listings = types
	.model('Listings', {
		liked: types.array(types.number),
		disliked: types.array(types.number),
	})
	.actions( self => ({
		setLiked: (arr) => {
			self.liked = arr
		},
		setDisliked: (arr) => {
			self.disliked = arr
		},
		hydrate: flow(function*() {
			const data = yield AsyncStorage.getItem('Listings')
			const listingInfo = {
				...JSON.parse(data),
			}
			applySnapshot(self, listingInfo)
		}),
	}))