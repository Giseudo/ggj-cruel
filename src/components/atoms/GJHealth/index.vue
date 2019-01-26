<template>
	<div
		class="gj-health"
		:class="[
			`gj-health--${size}`
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
			<circle cx="21" cy="21" r="18" fill="none" stroke="#6db227" stroke-width="5"
				stroke-dasharray="113.076"
				:stroke-dashoffset="113.076 * (1 - (value / total))"
			/>
		</svg>
	</div>
</template>

<script>
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	props: {
		total: {
			type: Number,
			default: 100
		},
		value: {
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

	mounted() {
		let circle = this.$el.querySelector('.gj-health__circle circle:last-child'),
			total = +circle.attributes.getNamedItem('stroke-dashoffset').value

		circle.style.strokeDashoffset = 100

		TweenMax.to(circle, 2, {
			strokeDashoffset: total,
			ease: Power2.easeOut
		})
	}
} 
</script>

<style lang="scss">
.gj-health{
	position: relative;
	display: inline-block;
	&__thumbnail{
		background-size: cover;
		background-position: center;
		background-color: lightgrey;
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
				width: 40px;
				height: 40px;
				border-radius: 40px;
			}
			&__circle{
				width: 42px;
			}
		}
	}
	&--md{
		.gj-health{
			&__thumbnail{
				width: 60px;
				height: 60px;
				border-radius: 60px;
			}
			&__circle{
				width: 62px;
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
}
</style>
