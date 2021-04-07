import AsyncStorage from '@react-native-community/async-storage'
import { flow, onSnapshot, types } from 'mobx-state-tree'

import { User } from './models/User'
import { Listings } from './models/Listings'

export const Store = types
	.model('Store', {
		User,
		Listings,
		isHydrated: false,
	})
	.actions(self => ({
		hydrate: flow(function* hydrate() {
			yield self.User.hydrate()
		})
	}))
	.create({
		User: {},
		Listings: {},
	})

// Persist snapshots
onSnapshot(Store.User, (snapshot) => {
	AsyncStorage.setItem('User', JSON.stringify(snapshot))
})
onSnapshot(Store.Listings, (snapshot) => {
	AsyncStorage.setItem('Listings', JSON.stringify(snapshot))
})