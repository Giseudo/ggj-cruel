<template>
	<div
		class="gj-item"
		:class="{'is-dark': dark}"
	>
		<gj-sprite class="gj-item__sprite" :name="sprite" />
		<gj-text class="gj-item__name" :dark="dark" :bold="bold">
			{{ name }}
		</gj-text>
	</div>
</template>

<script>
import GJSprite from '@/components/atoms/GJSprite'
import GJText from '@/components/atoms/GJText'

export default {
	components: {
		'gj-sprite': GJSprite,
		'gj-text': GJText
	},

	props: {
		name: {
			type: Number,
			default: 500
		},
		sprite: {
			type: String,
			default: 'gold'
		},
		dark: {
			type: Boolean,
			default: false
		},
		bold: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.gj-item{
	display: inline-flex;
	height: 44px;
	align-items: center;
	&__sprite{
		margin-right: 5px;
	}
	&__value{
		color: rgba(black, .8);
		&.is-dark{
			color: rgba(white, .8);
		}
	}
}
</style>
