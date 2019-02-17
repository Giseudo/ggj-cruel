import Vue from 'vue'
import store from '@/store'

export const initial = {
	scene: 'cruel',
	passage: '0',
	gold: 500,
	orb: false,

	dad: {
		name: 'Thomas',
		avatar: require('@/assets/images/chars/dad.jpg'),
		hp: [100, 100],
		mana: [100, 100],
		arcane: 10,
		hide: true,
		chased: false,
		negotiated: false,
		dead: false
	},

	mom: {
		name: 'Judith',
		avatar: require('@/assets/images/chars/judith.jpg'),
		hp: [100, 100],
		hide: true,
		dead: false
	},

	son: {
		name: 'Jedah',
		avatar: require('@/assets/images/chars/jedah.jpg'),
		hp: [100, 100],
		hide: true,
		dead: false
	},

	daughter: {
		name: 'Relah',
		avatar: require('@/assets/images/chars/relah.jpg'),
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
		},
		getChased(state) {
			return state.dad.chased
		},
		getNegotiated(state) {
			return state.dad.negotiated
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

			// Verify if target has died
			if (hp == 0) {
				Vue.set(target, 'dead', true)

				// Disable previous button if player has died
				if (target.name == state.dad.name)
					store.commit('scene/setBack', false)

				// Notificate
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
			if (character == 'all') {
				Vue.set(state.mom, 'hide', false)
				Vue.set(state.son, 'hide', false)
				Vue.set(state.daughter, 'hide', false)

				return
			}

			Vue.set(state[character], 'hide', false)
		},

		hide(state, character) {
			Vue.set(state[character], 'hide', true)
		},

		gameover(state) {
			state.end = true

			store.commit('scene/setPassage', null)
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

			data = JSON.parse(JSON.stringify(data))

			Vue.set(state, 'gold', data.gold)
			Vue.set(state, 'orb', data.orb)
			Vue.set(state, 'dad', data.dad)
			Vue.set(state, 'mom', data.mom)
			Vue.set(state, 'son', data.son)
			Vue.set(state, 'daughter', data.daughter)

			// Update passage
			store.commit('scene/setPassage', data.passage)

			// Reset history
			store.commit('scene/resetHistory')

			// Show previous button again
			store.commit('scene/setBack', true)
		},

		save(state) {
			let data = JSON.parse(JSON.stringify(state))

			state.memory = {
				gold: data.gold,
				orb: data.orb,
				dad: data.dad,
				mom: data.mom,
				son: data.son,
				daughter: data.daughter,
				scene: JSON.parse(JSON.stringify(store.state.scene.current)),
				passage: JSON.parse(JSON.stringify(store.state.scene.passage))
			}

			store.commit('notification/add', {
				sprite: 'letter',
				message: 'Progresso salvo.'
			})

			store.commit('scene/resetHistory')
		},

		reset(state) {
			let data = JSON.parse(JSON.stringify(initial))

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

			// Show previous button again
			store.commit('scene/setBack', true)
		},

		setOrb(state, payload = true) {
			if (payload)
				store.commit('notification/add', {
					sprite: 'orb',
					message: 'Você obteve o Orbe Azul.'
				})

			state.orb = payload
		},

		negotiate(state) {
			store.commit('notification/add', {
				sprite: 'orb',
				message: 'Você entregou o Orbe Azul para Rauin.'
			})

			store.commit('game/setOrb', false)
			Vue.set(state.dad, 'negotiated', true)
		},

		chase(state) {
			Vue.set(state.dad, 'chased', true)
		},

		setMana(state, amount) {
			Vue.set(state.dad.mana, 0, amount)
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
					store.commit('notification/add', {
						sprite: 'wand',
						message: 'Você não tem mana suficiente!'
					})

					reject(state.dad.mana)
				}
			})
		}
	}
}
