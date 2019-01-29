<template>
  <div id="app" class="gj-app">
		<transition name="continue">
			<gj-continue
				v-if="end"
				class="gj-app__continue"
				@continue="onContinue"
				@quit="onQuit"
			/>
		</transition>

		<router-view />
  </div>
</template>

<script>
import { disableBodyScroll } from 'body-scroll-lock'
import { mapGetters } from 'vuex'
import GJContinue from '@/components/templates/GJContinue'

export default {
	components: {
		'gj-continue': GJContinue
	},

	computed: {
		...mapGetters({
			'end': 'game/getEnd'
		})
	},

	created() {
		this.$store.commit('game/init')
	},

	mounted() {
		disableBodyScroll(this.$el)
	},

	methods: {
		onContinue(){
			this.$store.commit('game/load')
		},

		onQuit(){
			this.$store.commit('game/reset')
		}
	}
}
</script>

<style lang="scss">
html, body{
	height: 100%;
	overflow: hidden;
}

.gj-app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	display: flex;
	width: 100%;
	height: 100%;
	&__continue{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
	}
}

// Continue
.continue-enter-active, .continue-leave-active {
	transition: all .3s $easeInOutQuad;
}

.continue-enter{
	transform: scale(1.1);
	opacity: 0;
}

.continue-leave-active{
	transform: scale(0.9);
	opacity: 0;
}
</style>
