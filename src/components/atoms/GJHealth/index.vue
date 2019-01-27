<template>
	<div
		class="gj-health"
		:class="[
			`gj-health--${size}`,
			{
				'is-dead': dead
			}
		]"
	>
		<div
			class="gj-health__thumbnail"
			:style="{ backgroundImage: `url(${image})` }"
		>
		</div>

		<svg class="gj-health__circle" viewBox="0 0 42 42">
			<circle cx="21" cy="21" r="18" fill="none" stroke="#421216" stroke-width="4"
				stroke-dasharray="113.076"
				:stroke-dashoffset="113.076 * (1 - 1)"
			/>
			<circle cx="21" cy="21" r="18" fill="none" :stroke="color" stroke-width="5"
				stroke-dasharray="113.076"
				:stroke-dashoffset="radius"
			/>
		</svg>
	</div>
</template>

<script>
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	props: {
		value: {
			type: Number,
			default: 100
		},
		current: {
			type: Number,
			default: 70
		},
		size: {
			type: String,
			default: 'md'
		},
		debuff: {
			type: Boolean,
			default: false
		},
		buff: {
			type: Boolean,
			default: false
		},
		image: {
			type: String,
			default: 'https://placeimg.com/640/480/people'
		}
	},

	computed: {
		radius() {
			return 113.076 * (1 - (this.current / this.value))
		},

		color() {
			let percent = (this.current * 100) / this.value

			if (percent > 50)
				return '#6db227'
			else if (percent > 20)
				return 'orange'
			else
				return '#f4424b'
		},

		dead() {
			return this.current == 0
		}
	},

	watch: {
		current(value) {
			let circle = this.$el.querySelector('.gj-health__circle circle:last-child')

			TweenMax.to(circle, 1, {
				strokeDashoffset: this.radius,
				stroke: this.color,
				ease: Power2.easeOut
			})
		}
	},

	mounted() {
		let circle = this.$el.querySelector('.gj-health__circle circle:last-child')

		circle.style.strokeDashoffset = 100

		TweenMax.to(circle, 2, {
			strokeDashoffset: this.radius,
			ease: Power2.easeOut
		})
	}
} 
</script>

<style lang="scss">
.gj-health{
	position: relative;
	display: inline-block;
	transition: opacity .2s $easeInOutQuad;
	&__thumbnail{
		background-size: cover;
		background-position: center;
		background-color: lightgrey;
		transform: scale(.9);
	}
	&__circle{
		position: absolute;
		height: auto;
		top: -1px;
		left: -1px;
		transform: rotate(-90deg);
	}

	// Size
	&--sm{
		.gj-health{
			&__thumbnail{
				width: 36px;
				height: 36px;
				border-radius: 36px;
			}
			&__circle{
				width: 38px;
			}
		}
	}
	&--md{
		.gj-health{
			&__thumbnail{
				width: 64px;
				height: 64px;
				border-radius: 64px;
			}
			&__circle{
				width: 66px;
			}
		}
	}
	&--lg{
		.gj-health{
			&__thumbnail{
				width: 80px;
				height: 80px;
				border-radius: 80px;
			}
			&__circle{
				width: 82px;
			}
		}
	}

	&.is-dead{
		opacity: .5;
	}
}
</style>
