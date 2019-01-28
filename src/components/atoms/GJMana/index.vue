<template>
	<div
		class="gj-mana"
		:class="[
			`gj-mana--${size}`
		]"
	>
	<div class="gj-mana__wrapper" :data-amount="`${current}/${value}`">
			<span class="gj-mana__progress">
			</span>
		</div>
	</div>
</template>

<script>
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	props: {
		value: {
			type: Number,
			default: 200
		},
		current: {
			type: Number,
			default: 140
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		}
	},

	watch: {
		current(value) {
			let progress = this.$el.querySelector('.gj-mana__progress')

			TweenMax.to(progress, 2, {
				width: ((value * 100) / this.value) + '%',
				ease: Power2.easeOut
			})
		}
	},

	mounted() {
		let progress = this.$el.querySelector('.gj-mana__progress')

		progress.style.width = 0

		TweenMax.to(progress, 2, {
			width: ((this.current * 100) / this.value) + '%',
			ease: Power2.easeOut
		})
	}
}
</script>

<style lang="scss">
.gj-mana{
	&__wrapper{
		border-radius: 999px;
		background: #421216;
		position: relative;
		&:before{
			content: attr(data-amount);
			position: absolute;
			left: 10px;
			top: 50%;
			font-size: 7px;
			font-weight: 700;
			letter-spacing: 1px;
			font-family: Roboto;
			color: white;
			z-index: 10;
			transform: translate(0, -50%);
		}
	}
	&__progress{
		border-radius: 999px;
		background: #27b0f9;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		display: inline-block;
	}

	// Size
	&--sm{
		.gj-mana{
			&__wrapper{
				height: 10px;
			}
		}
	}
	&--md{
		.gj-mana{
			&__wrapper{
				height: 24px;
			}
		}
	}
	&--lg{
		.gj-mana{
			&__wrapper{
				height: 32px;
			}
		}
	}
}
</style>
