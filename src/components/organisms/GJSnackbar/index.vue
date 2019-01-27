<template>
	<div class="gj-snackbar" @click="add('orb', 'OMG', 'punch')">
		<transition name="alert">
			<gj-alert
				v-if="current"
				class="gj-snackbar__alert"
				:sprite="current.sprite"
				:message="current.message"
			>
			</gj-alert>
		</transition>
	</div>
</template>

<script>
import GJAlert from '@/components/molecules/GJAlert'
import store from '@/store'

export default {
	components: {
		'gj-alert': GJAlert
	},

	props: {
		delay: {
			type: Number,
			default: 400
		}
	},

	data: () => ({
		alerts: [],
		current: null
	}),

	watch: {
		current(value) {
			if (!value)
				return

			if (value && value.sound)
				store.commit('audio/play', value.sound)

			setTimeout(() => {
				this.current = null

				if (this.alerts.length > 0)
					setTimeout(() => {
						this.current = this.alerts[0]

						if (this.alerts.length > 0)
							this.alerts.splice(0, 1)
					}, this.delay)
			}, value.timeout)
		}
	},

	methods: {
		add(sprite, message, sound, timeout = 5000) {
			let alert = {
				sprite: sprite,
				message: message,
				sound: sound,
				timeout: timeout
			}

			this.alerts.unshift(alert)

			if (!this.current) {
				this.current = alert

				if (this.alerts.length > 0)
					this.alerts.splice(0, 1)
			}
		}
	}
}
</script>

<style lang="scss">
.gj-snackbar{
}

.alert-enter-active, .alert-leave-active {
	transition: all .3s $easeInOutQuad;
}

.alert-enter{
	transform: scale(1.05);
	opacity: 0;
}

.alert-leave-active{
	transform: scale(.95);
	opacity: 0;
}
</style>
