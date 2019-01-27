import Vue from 'vue'
import store from '@/store'

export default {
	namespaced: true,
	state: {
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
		}
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
		getOrb() {
			return state.orb
		}
	},

	mutations: {
		damage(state, payload) {
			let target = state[payload.target],
				hp = target.hp[0]

			if (target.dead)
				return

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
	},

	actions: {
		//
	}
}
