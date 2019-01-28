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
				width: ((value * 100) / this.value) + 15 + '%',
				ease: Power2.easeOut
			})
		}
	},

	mounted() {
		let progress = this.$el.querySelector('.gj-mana__progress')

		progress.style.width = 0

		TweenMax.to(progress, 2, {
			width: ((this.current * 100) / this.value) + 15 + '%',
			ease: Power2.easeOut
		})
	}
}
</script>

<style lang="scss">
.gj-mana{
	border-radius: 999px;
	overflow: hidden;
	box-shadow: 0 0px 25px rgba(255, 0, 177, 0.72);
	&__wrapper{
		background: rgba(156, 86, 86, 0.3);
		position: relative;
		&:before{
			content: none; // attr(data-amount);
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
		&:after{
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: linear-gradient(to top, rgba(#d7f4a9, .9) 0%, transparent 50%);
			border-radius: 999px;
		}
	}
	&__progress{
		background: linear-gradient(to top, cyan 0%, transparent 150%);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		display: inline-block;
		filter: blur(3px);
		transform: skew(25deg);
		animation-name: mana-progress;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: $easeInOutQuad;
	}

	// Size
	&--sm{
		.gj-mana{
			&__wrapper{
				height: 8px;
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
				height: 64px;
			}
		}
	}
}

@keyframes mana-progress{
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.8;
	}
	100% {
		opacity: 1;
	}
}
</style>
