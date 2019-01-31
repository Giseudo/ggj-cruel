import Vue from 'vue'
import store from '@/store'

export default {
	namespaced: true,
	state: {
		alerts: [],
		current: null
	},

	getters: {
		getCurrent(state) {
			return state.current
		},
	},

	mutations: {
		add(state, payload) {
			let alert = {
				sprite: payload.sprite,
				message: payload.message,
				sound: payload.sound,
				timeout: payload.timeout || 3000
			}

			state.alerts.push(alert)

			if (state.alerts.length == 1)
				store.commit('notification/setCurrent', 0)
		},

		setCurrent(state, index) {
			// Set current
			Vue.set(state, 'current', state.alerts[index])

			// Play sound if it has
			if (state.current.sound)
				store.commit('audio/play', state.current.sound)

			// Wait for timeout
			setTimeout(() => {
				// Reset current
				Vue.set(state, 'current', null)

				// Wait delay for new message
				setTimeout(() => {
					// Remove from list
					state.alerts.splice(index, 1)

					if (state.alerts.length > 0)
						store.commit('notification/setCurrent', 0)
				}, 400)
			}, state.current.timeout)
		}
	},

	actions: {
		//
	}
}
