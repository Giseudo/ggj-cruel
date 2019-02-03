import Vue from 'vue'
import store from '@/store'

export default {
	namespaced: true,
	state: {
		initial: '0',
		scenes: null,
		current: null,
		history: [],
		passage: null,
		previousPassage: null,
		background: null
	},

	getters: {
		getBackground(state) {
			return state.background
		},

		getCurrent(state) {
			return state.scenes[state.current]
		},

		getPassage(state) {
			let scene = state.scenes[state.current]
				
			if (scene && scene.passages[state.passage])
				return scene.passages[state.passage]
			else
				return null
		},

		getHistory(state) {
			return state.history
		},

		getInitial(state) {
			return state.initial
		}
	},

	mutations: {
		previous(state) {
			state.passage = state.history.pop()

			if (state.passage.init)
				passage.init(state.history[state.history.length - 1])
		},

		resetHistory(state) {
			state.history = []
		},

		setBackground(state, payload) {
			return state.background = payload
		},

		setPassage(state, payload) {
			let scene = state.scenes[state.current],
				passage = scene.passages[state.passage],
				next = payload,
				previous = state.passage

			// Update previous if its not null
			if (previous)
				state.history.push(previous)

			// Exit callback
			if (passage && passage.exit)
				passage.exit(next) // TODO Pass game data

			// Update passage
			state.passage = next
			passage = scene.passages[state.passage]

			// Init callback
			if (passage && passage.init)
				passage.init(previous) // TODO Pass game data
		},

		setScene(state, payload) {
			state.current = payload

			if (state.scenes)
				state.scenes[state.current].init()
		},

		setInitial(state, passage) {
			Vue.set(state, 'initial', passage)
		}
	},

	actions: {
		fetch({ state, commit }, payload) {
			return new Promise((resolve, reject) => {
				let scenes = require('@/data/scenes').default(store)

				state.scenes = scenes

				// Resolve
				resolve(scenes)
			})
		}
	}
}
