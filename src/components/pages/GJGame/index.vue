<template>
	<gj-scene class="gj-game"
		:status="status"
		:dad="dad"
		:mom="mom"
		:son="son"
		:daughter="daughter"
		:gold="gold"
		:background="background"
		:passage="passage"
		:notification="notification"
	>
	</gj-scene>
</template>

<script>
import GJScene from '@/components/templates/GJScene'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
	beforeRouteEnter(to, from, next) {
		store.dispatch('scene/fetch')
			.then(() => {
				store.commit('scene/setScene', 'cruel')
				next()
			})
	},

	components: {
		'gj-scene': GJScene
	},

	data: () => ({
		status: false
	}),

	computed: {
		dad: function () { return this.$store.state.game.dad },
		...mapGetters({
			mom: 'game/getMom',
			son: 'game/getSon',
			daughter: 'game/getDaughter',
			gold: 'game/getGold',
			passage: 'scene/getPassage',
			scene: 'scene/getCurrent',
			background: 'scene/getBackground',
			notification: 'notification/getCurrent'
		})
	},

	methods: {
		onClick() {
			/*
			this.$store.commit('game/damage', {
				target: 'dad',
				amount: 30
			})
			this.$store.commit('game/damage', {
				target: 'mom',
				amount: 10
			})
			this.$store.commit('game/damage', {
				target: 'son',
				amount: 30
			})
			this.$store.commit('game/damage', {
				target: 'daughter',
				amount: 60
			})
			this.$store.commit('game/spend', 20)
			*/

		}
	}
}
</script>

<style lang="scss">
</style>
