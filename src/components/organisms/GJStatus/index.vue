<template>
	<div class="gj-status" @click="mom.hide = !mom.hide; son.hide = !son.hide; daughter.hide = !daughter.hide">
		<gj-hero
			class="gj-status__hero"
			:name="dad.name"
			:image="dad.avatar"
			:health="dad.hp"
			:mana="dad.mana"
			:dark="dark"
		>
		</gj-hero>

		<transition-group name="parent" class="gj-status__container">
			<gj-health
				v-if="mom && !mom.hide"
				class="gj-status__mom"
				size="sm"
				:key="0"
				:image="mom.avatar"
				:current="mom.hp[0]"
				:value="mom.hp[1]"
			/>
			<gj-health
				v-if="son && !son.hide"
				class="gj-status__son"
				size="sm"
				:key="1"
				:image="son.avatar"
				:current="son.hp[0]"
				:value="son.hp[1]"
			/>
			<gj-health
				v-if="daughter && !daughter.hide"
				class="gj-status__daughter"
				size="sm"
				:key="2"
				:image="daughter.avatar"
				:current="daughter.hp[0]"
				:value="daughter.hp[1]"
			/>
		</transition-group>

		<transition name="fade-scale">
			<gj-sprite
				v-show="orb"
				class="gj-status__orb"
				name="orb"
			/>
		</transition>
	</div>
</template>

<script>
import GJHero from '@/components/atoms/GJHero'
import GJHealth from '@/components/atoms/GJHealth'
import GJMoney from '@/components/molecules/GJMoney'
import GJSprite from '@/components/atoms/GJSprite'

export default {
	components: {
		'gj-hero': GJHero,
		'gj-health': GJHealth,
		'gj-money': GJMoney,
		'gj-sprite': GJSprite
	},

	props: {
		dad: {
			type: Object,
			default: () => ({
				hp: [80, 100],
				mana: [40, 100],
				avatar: require('@/assets/images/chars/nier.jpg')
			})
		},
		mom: {
			type: Object,
			default: () => ({
				hp: [100, 100],
				hide: true,
				avatar: require('@/assets/images/chars/kaine.jpg')
			})
		},
		son: {
			type: Object,
			default: () => ({
				hp: [10, 100],
				hide: true,
				avatar: require('@/assets/images/chars/emil.jpg')
			})
		},
		daughter: {
			type: Object,
			default: () => ({
				hp: [40, 100],
				hide: true,
				avatar: require('@/assets/images/chars/yonah.jpg')
			})
		},
		orb: {
			type: Boolean,
			default: false
		},
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.gj-status{
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	&__hero{
		max-width: 300px;
		flex: 0 100%;
		z-index: 10;
	}
	&__container{
		position: absolute;
		top: 0;
		left: 0;
		width: 84px;
		height: 84px;
		.gj-health{
			position: absolute;
			top: 50%;
			left: 50%;
		}
	}
	&__orb{
		margin-left: 10px;
	}
	&__mom{
		transform: translate(-120%, 135%) scale(1);
	}
	&__son{
		transform: translate(0%, 135%) scale(1);
	}
	&__daughter{
		transform: translate(100%, 70%) scale(1);
	}
}

// Status
.parent-enter-active, .parent-leave-active {
	transition: all .3s $easeInOutQuad;
}

.parent-enter,
.parent-leave-active{
	transform: translate(-50%, -50%) scale(0) !important;
}

// Fade scale
.fade-scale-enter-active,
.fade-scale-leave-active{
	transition: all .3s $easeInOutQuad;
}
.fade-scale-enter,
.fade-scale-leave-active{
	opacity: 0 !important;
	transform: scale(1.2) !important;
}

// Background next
.background-next-enter-active{
	transition: all 2s $easeInOutQuad;
}
.background-next-enter,
.background-next-leave-active{
	opacity: 0 !important;
	transform: scale(1.2) !important;
}

</style>
