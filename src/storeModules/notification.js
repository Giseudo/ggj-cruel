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
				timeout: payload.timeout || 5000
			}

			state.alerts.unshift(alert)

			if (state.alerts.length == 1)
				store.commit('notification/setCurrent', 0)
		},

		setCurrent(state, index) {
			// Set current
			state.current = state.alerts[index]

			// Play sound if it has
			if (state.current.sound)
				store.commit('audio/play', state.current.sound)

			// Wait for timeout
			setTimeout(() => {
				// Reset current
				state.current = null

				// Remove from list
				state.alerts.splice(index, 1)

				// Wait delay for new message
				if (state.alerts.length > 0)
					setTimeout(() => {
						store.commit('notification/setCurrent', 0)
					}, 400)
			}, state.current.timeout)
		}
	},

	actions: {
		//
	}
}
