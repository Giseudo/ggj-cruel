<template>
	<div class="gj-scene">
		<div class="gj-scene__background" :style="{ backgroundImage: `url(${background})` }">
		</div>

		<transition name="previous">
			<gj-previous
				class="gj-scene__previous"
				v-if="hasPrevious"
				size="sm"
				@click="$emit('previous')"
			/>
		</transition>

		<div class="gj-scene__debug" v-if="debug">
			{{ $store.state.scene.passage }}
		</div>

		<div class="gj-scene__wrapper">
			<div class="gj-scene__header">
				<transition name="status">
					<gj-status
						v-if="!dad.hide"
						class="gj-scene__status"
						:dad="dad"
						:mom="mom"
						:son="son"
						:daughter="daughter"
						:gold="gold"
						:dark="true"
					/>
				</transition>
			</div>

			<div class="gj-scene__notifications">
				<transition name="alert">
					<gj-alert
						:sprite="notification.sprite"
						:message="notification.message"
						v-if="notification"
					/>
				</transition>
			</div>
		</div>

		<transition name="passage">
			<gj-passage
				class="gj-scene__passage"
				v-if="passage"
				:name="passage.name"
				:text="passage.text"
				:actions="passage.actions"
				:next="passage.next"
				:first="passage.first"
			/>
		</transition>
	</div>
</template>

<script>
import GJStatus from '@/components/organisms/GJStatus'
import GJPassage from '@/components/organisms/GJPassage'
import GJAlert from '@/components/molecules/GJAlert'
import GJPrevious from '@/components/atoms/GJPrevious'

import { mapGetters } from 'vuex'

export default {
	components: {
		'gj-status': GJStatus,
		'gj-passage': GJPassage,
		'gj-alert': GJAlert,
		'gj-previous': GJPrevious
	},

	props: {
		status: {
			type: Object|Boolean,
			default: () => {}
		},
		background: {
			type: String,
			default: require('@/assets/images/bgs/forest-01.jpg')
		},
		passage: {
			type: Object,
			default: null
		},
		notification: {
			type: Object,
			default: null
		},
		gold: {
			type: Number,
			default: 300
		},
		dad: {
			type: Object,
			default: () => ({
				hide: false
			})
		},
		mom: {
			type: Object,
			default: undefined
		},
		son: {
			type: Object,
			default: undefined
		},
		daughter: {
			type: Object,
			default: undefined
		},
		hasPrevious: {
			type: Boolean,
			default: true
		},
		debug: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style lang="scss">
.gj-scene{
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	position: relative;
	z-index: 5;
	&:before{
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 400px;
		background: linear-gradient(to bottom, rgba(black, .8) 0%, transparent 100%);
		z-index: -1;
	}
	&__background{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(black, .3);
		background-size: cover;
		background-position: center;
		z-index: -2;
	}
	&__previous{
		position: absolute;
		bottom: 0px;
		left: 0px;
		z-index: 30;
	}
	&__status{
	}
	&__header{
		min-height: 124px;
		margin: 10px;
	}
	&__notifications{
		padding: 10px;
		position: absolute;
		top: 140px;
		left: 90px;
		right: 0;
	}
	&__passage{
		height: 70%;
	}
	&__debug{
		position: absolute;
		top: 10px;
		right: 10px;
		color: yellow;
		font-weight: 600;
		font-family: Roboto;
	}
}

// Alert
.alert-enter-active, .alert-leave-active {
	transition: all .3s $easeInOutQuad;
}

.alert-enter{
	transform: translateX(30px);
	opacity: 0;
}

.alert-leave-active{
	transform: translateX(30px);
	opacity: 0;
}

// Passage
.passage-enter-active, .passage-leave-active {
	transition: all .3s $easeInOutQuad;
}

.passage-enter{
	transform: translateY(20%);
	opacity: 0;
}

.passage-leave-active{
	transform: translateY(80%);
	opacity: 0;
}

// Status
.status-enter-active, .status-leave-active {
	transition: all .3s $easeInOutQuad;
}

.status-enter{
	transform: translateY(-100%);
}

.status-leave-active{
	transform: translateY(-100%);
}

// Previous
.previous-enter-active, .previous-leave-active {
	transition: all .3s $easeInOutQuad;
}

.previous-enter,
.previous-leave-active{
	transform: translate(-100%, 100%);
	opacity: 0;
}
</style>
