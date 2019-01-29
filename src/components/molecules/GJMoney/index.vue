<template>
	<div
		class="gj-money"
		:class="{'is-dark': dark}"
	>
		<gj-sprite class="gj-money__sprite" :name="sprite" />
		<gj-text class="gj-money__amount" :dark="dark" :bold="true" type="tiny">
			{{ value }}z
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
		value: {
			type: Number,
			default: 50
		},
		sprite: {
			type: String,
			default: 'gold'
		},
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.gj-money{
	display: inline-flex;
	flex-flow: column;
	align-items: center;
	&__sprite{
		flex-shrink: 0;
	}
	&__amount{
		transform: translateY(-2px);
	}
}
</style>
