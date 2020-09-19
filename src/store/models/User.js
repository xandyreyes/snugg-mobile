import AsyncStorage from '@react-native-community/async-storage'
import { applySnapshot, flow, types } from 'mobx-state-tree'

export const User = types
	.model('User', {
		access_token: types.maybeNull(types.string),
		expires_at: types.maybeNull(types.string),
		data: types.maybeNull(
			types.model({
				firstname: types.maybeNull(types.string),
				middlename: types.maybeNull(types.string),
				lastname: types.maybeNull(types.string),
				type_id: types.maybeNull(types.number),
				email: types.maybeNull(types.string),
				contact_number: types.maybeNull(types.number),
				address: types.maybeNull(types.string),
				lat: types.maybeNull(types.string),
				lon: types.maybeNull(types.string),
				device_id: types.maybeNull(types.number)
			})
		)
	})
	.actions( self => ({
		setUser: (user) => {
			self.access_token = user.access_token
			self.expires_at = user.expires_at
			self.data = user.data
		},
		hydrate: flow(function*() {
			const data = yield AsyncStorage.getItem('User')
			if (data) {
				applySnapshot(self, JSON.parse(data))
			}
		}),
	}))