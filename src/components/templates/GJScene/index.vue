<template>
	<div class="gj-scene">
		<div class="gj-scene__background" :style="{ backgroundImage: `url(${background})` }">
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
			/>
		</transition>
	</div>
</template>

<script>
import GJStatus from '@/components/organisms/GJStatus'
import GJPassage from '@/components/organisms/GJPassage'
import GJAlert from '@/components/molecules/GJAlert'

import { mapGetters } from 'vuex'

export default {
	components: {
		'gj-status': GJStatus,
		'gj-passage': GJPassage,
		'gj-alert': GJAlert
	},

	props: {
		status: {
			type: Object|Boolean,
			default: () => {}
		},
		background: {
			type: String,
			default: require('@/assets/images/bgs/village-01.jpg')
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
			default: undefined
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
	&__status{
	}
	&__header{
		min-height: 64px;
		margin: 10px;
	}
	&__notifications{
		padding: 10px;
		min-height: 52px;
	}
	&__passage{
		height: 70%;
	}
}

// Alert
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
.status-enter-active, .passage-leave-active {
	transition: all .3s $easeInOutQuad;
}

.status-enter{
	transform: translateY(-100%);
}

.status-leave-active{
	transform: translateY(-100%);
}

</style>
