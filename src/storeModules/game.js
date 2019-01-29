import Vue from 'vue'
import store from '@/store'
import { cloneDeep } from 'lodash'

export const initial = {
	scene: 'cruel',
	passage: '0',
	gold: 500,
	orb: false,

	dad: {
		name: 'Thomas',
		avatar: require('@/assets/images/chars/nier.jpg'),
		hp: [100, 100],
		mana: [100, 100],
		arcane: 10,
		hide: true,
		dead: false
	},

	mom: {
		name: 'Judith',
		avatar: require('@/assets/images/chars/kaine.jpg'),
		hp: [100, 100],
		hide: true,
		dead: false
	},

	son: {
		name: 'Jedah',
		avatar: require('@/assets/images/chars/emil.jpg'),
		hp: [100, 100],
		hide: true,
		dead: false
	},

	daughter: {
		name: 'Relah',
		avatar: require('@/assets/images/chars/yonah.jpg'),
		hp: [100, 100],
		hide: true,
		dead: false
	},
}

export default {
	namespaced: true,
	state: {
		start: true,
		end: false,
		gold: undefined,
		orb: undefined,
		dad: undefined,
		mom: undefined,
		son: undefined,
		daughter: undefined,
		memory: undefined
	},

	getters: {
		getDad(state) {
			return state.dad
		},
		getMom(state) {
			return state.mom
		},
		getSon(state) {
			return state.son
		},
		getDaughter(state) {
			return state.daughter
		},
		getGold(state) {
			return state.gold
		},
		getOrb(state) {
			return state.orb
		},
		getStart(state) {
			return state.start
		},
		getEnd(state) {
			return state.end
		}
	},

	mutations: {
		damage(state, payload) {
			let target = state[payload.target],
				hp = target.hp[0]

			if (target.dead)
				return

			if (payload.sound)
				store.commit('audio/play', payload.sound)

			if (hp - payload.amount >= 0)
				hp -= payload.amount
			else
				hp = 0

			Vue.set(target.hp, 0, hp)

			if (hp == 0) {
				Vue.set(target, 'dead', true)

				store.commit('notification/add', {
					sprite: 'skull',
					message: `${target.name} morreu!`
				})
			}
		},

		spend(state, amount) {
			if (state.gold - amount > 0)
				state.gold -= amount
		},

		show(state, character) {
			Vue.set(state[character], 'hide', false)
		},

		hide(state, character) {
			Vue.set(state[character], 'hide', true)
		},

		gameover(state) {
			state.end = true
			store.commit('scene/setPassage', null)
			// store.commit('game/load')
		},

		init(state) {
			state.start = true
			state.end = false
			store.commit('game/load')
		},

		load(state) {
			let data = state.memory

			state.end = false

			if (!data)
				return store.commit('game/reset')

			data = cloneDeep(data)

			Vue.set(state, 'gold', data.gold)
			Vue.set(state, 'orb', data.orb)
			Vue.set(state, 'dad', data.dad)
			Vue.set(state, 'mom', data.mom)
			Vue.set(state, 'son', data.son)
			Vue.set(state, 'daughter', data.daughter)

			// Update passage
			store.commit('scene/setPassage', data.passage)
		},

		save(state) {
			let data = cloneDeep(state)

			state.memory = {
				gold: data.gold,
				orb: data.orb,
				dad: cloneDeep(data.dad, true),
				mom: data.mom,
				son: data.son,
				daughter: data.daughter,
				scene: store.state.scene.current,
				passage: store.state.scene.passage
			}

			store.commit('notification/add', {
				sprite: 'letter',
				message: 'Progresso salvo.'
			})
		},

		reset(state) {
			let data = cloneDeep(initial)

			state.memory = null
			state.end = false

			Vue.set(state, 'gold', data.gold)
			Vue.set(state, 'orb', data.orb)
			Vue.set(state, 'dad', data.dad)
			Vue.set(state, 'mom', data.mom)
			Vue.set(state, 'son', data.son)
			Vue.set(state, 'daughter', data.daughter)
			Vue.set(state, 'passage', null)

			// Back to home screen
			store.commit('scene/setScene', data.scene)
		},

		setOrb(state, payload = true) {
			state.orb = payload
		}
	},

	actions: {
		cast({ state }, amount) {
			let mana = state.dad.mana[0]

			return new Promise((resolve, reject) => {
				if (mana - amount >= 0) {
					Vue.set(state.dad.mana, 0, mana - amount)
					resolve(state.dad.mana)
				} else {
					reject(state.dad.mana)
				}
			})
		}
	}
}
