<template>
	<div
		class="gj-mana"
		:class="[
			`gj-mana--${size}`
		]"
	>
	<div class="gj-mana__wrapper" :data-amount="`${value}/${total}`">
			<span class="gj-mana__progress" :style="{ width: `${(value * 100) / total}%` }">
			</span>
		</div>
	</div>
</template>

<script>
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	props: {
		total: {
			type: Number,
			default: 200
		},
		value: {
			type: Number,
			default: 140
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		}
	},

	mounted() {
		let progress = this.$el.querySelector('.gj-mana__progress')

		progress.style.width = 0

		TweenMax.to(progress, 2, {
			width: ((this.value * 100) / this.total) + '%',
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
			left: 5px;
			top: 50%;
			font-size: 11px;
			font-weight: 700;
			letter-spacing: 1px;
			font-family: Arial;
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
				height: 16px;
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
