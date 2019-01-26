<template>
	<div
		class="gj-sprite"
		:style="{ backgroundImage: `url(${sprites})` }"
		:class="[
			`gj-sprite--${name}`
		]"
	>
	</div>
</template>

<script>
import sprites from '@/assets/images/sprites.png'

export default {
	props: {
		name: {
			type: String,
			default: 'gold'
		}
	},

	data: () => ({
		sprites
	})
}
</script>

<style lang="scss">
.gj-sprite{
	width: 32px;
	height: 32px;
	display: inline-block;
	&--gold{
		background-position: 0 -416px;
	}
}
</style>
