<template>
	<div
		class="gj-hero"
		:class="{
			'is-dead': dead
		}"
	>
		<gj-text class="gj-hero__name" :dark="dark" type="speech" :bold="true">
			{{ name }}
		</gj-text>

		<div class="gj-hero__avatar" :style="{ backgroundImage: `url(${image})` }">
		</div>

		<div class="gj-hero__wrapper">
			<div class="gj-hero__health">
				<span>
				</span>
			</div>
			<div class="gj-hero__mana">
				<span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import GJText from '@/components/atoms/GJText'
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	components: {
		'gj-text': GJText
	},

	props: {
		name: {
			type: String,
			default: 'Gabriel'
		},
		image: {
			type: String,
			default: 'https://placeimg.com/640/480/people'
		},
		health: {
			type: Array,
			default: () => [25, 80]
		},
		mana: {
			type: Array,
			default: () => [50, 100]
		},
		dark: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		getHealth() {
			return (this.health[0] * 100) / this.health[1]
		},
		getMana() {
			return (this.mana[0] * 100) / this.mana[1]
		},
		dead() {
			return this.health[0] == 0
		},
		color() {
			let percent = (this.health[0] * 100) / this.health[1]

			if (percent > 50)
				return '#6db227'
			else if (percent > 20)
				return 'orange'
			else
				return '#f4424b'
		},
	},

	watch: {
		health(value) {
			this.animate()
		},

		mana(value) {
			this.animate()
		}
	},

	mounted() {
		this.init()
	},

	methods: {
		init() {
			let health = this.$el.querySelector('.gj-hero__health span'),
				mana = this.$el.querySelector('.gj-hero__mana span')

			health.style.width = '0%'
			mana.style.width = '0%'

			this.animate()
		},

		animate() {
			let health = this.$el.querySelector('.gj-hero__health span'),
				mana = this.$el.querySelector('.gj-hero__mana span')

			TweenMax.to(health, 1, {
				width: this.getHealth + '%',
				background: this.color,
				ease: Power2.easeOut
			})

			TweenMax.to(mana, 1, {
				width: this.getMana + '%',
				ease: Power2.easeOut
			})
		}
	},
}
</script>

<style lang="scss">
.gj-hero{
	position: relative;
	transition: .3s $easeInOutQuad;
	&__name{
		position: absolute;
		top: 3px;
		left: 85px;
	}
	&__avatar{
		width: 80px;
		height: 80px;
		border-radius: 80px;
		background-size: 110% 110%;
		background-position: center;
		border: 2px solid rgba($c-darkred, .3);
	}
	&__wrapper{
		position: absolute;
		top: 50%;
		left: 50px;
		right: 0;
		transform: translateY(-50%);
		z-index: -1;
	}
	&__health,
	&__mana{
		height: 12px;
		transform: skew(-45deg);
		background: $c-darkred;
		span{
			position: absolute;
			top: 1px;
			bottom: 1px;
			left: -2px;
		}
	}
	&__health{
		width: 100%;
		margin-bottom: 5px;
		span{
			background: $c-green;
		}
	}
	&__mana{
		width: 80%;
		span{
			background: $c-blue;
		}
	}

	&.is-dead{
		opacity: .5;
	}
}
</style>
