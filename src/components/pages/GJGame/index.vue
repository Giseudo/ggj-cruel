<template>
	<gj-scene class="gj-game"
		v-if="scene"
		:debug="true"
		:status="status"
		:dad="dad"
		:mom="mom"
		:son="son"
		:daughter="daughter"
		:orb="orb"
		:background="background"
		:passage="passage"
		:back="back"
		:notification="notification"
		:has-previous="history.length > 0"
		@previous="$store.commit('scene/previous')"
	>
	</gj-scene>
</template>

<script>
import GJScene from '@/components/templates/GJScene'
import store from '@/store'
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
	beforeRouteEnter(to, from, next) {
		Vue.nextTick(() => {
			store.dispatch('scene/fetch')
				.then(next(vm => {
					store.commit('scene/setScene', 'cruel')

					// Debug mode
					if (to.params.passage) {
						store.commit('scene/setInitial', to.params.passage)
						store.commit('game/show', 'dad')
					}
				}))
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
			orb: 'game/getOrb',
			passage: 'scene/getPassage',
			history: 'scene/getHistory',
			scene: 'scene/getCurrent',
			back: 'scene/getBack',
			background: 'scene/getBackground',
			notification: 'notification/getCurrent',
		})
	},

	mounted() {
		this.$store.commit('audio/music', 'dark-tension-rising')
	}
}
</script>

<style lang="scss">
</style>
