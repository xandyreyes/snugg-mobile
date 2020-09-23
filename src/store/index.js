import AsyncStorage from '@react-native-community/async-storage'
import { flow, onSnapshot, types } from 'mobx-state-tree'

import { User } from './models/User'

export const Store = types
	.model('Store', {
		User,
		isHydrated: false,
	})
	.actions(self => ({
		hydrate: flow(function* hydrate() {
			yield self.User.hydrate()
		})
	}))
	.create({
		User: {}
	})

// Persist snapshots
onSnapshot(Store.User, (snapshot) => {
	AsyncStorage.setItem('User', JSON.stringify(snapshot))
})