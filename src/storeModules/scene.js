import Vue from 'vue'
import store from '@/store'

export default {
	namespaced: true,
	state: {
		scenes: null,
		current: null,
		previous: null,
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
		}
	},

	mutations: {
		setBackground(state, payload) {
			return state.background = payload
		},

		setPassage(state, payload) {
			let scene = state.scenes[state.current],
				passage = scene.passages[state.passage]

			// Exit callback
			if (passage && passage.exit)
				passage.exit() // TODO Pass game data

			// Update passage
			state.passage = payload
			passage = scene.passages[state.passage]

			// Init callback
			if (passage && passage.init)
				passage.init() // TODO Pass game data
		},

		setScene(state, payload) {
			state.current = payload

			state.scenes[state.current].init()
		}
	},

	actions: {
		fetch({ state, commit }, payload) {
			return new Promise((resolve, reject) => {
				let scenes = require('@/data/scenes').default()

				state.scenes = scenes
				resolve()
			})
		}
	}
}
