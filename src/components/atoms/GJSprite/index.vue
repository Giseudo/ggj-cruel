<template>
	<div
		class="gj-sprite"
		:style="{ backgroundImage: `url(${sprites})` }"
		:class="[
			`gj-sprite--${name}`,
			`gj-sprite--${size}`
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
		},
		size: {
			type: String,
			default: 'md'
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
	&--wand{
		background-position: -160px -192px;
	}
	&--dagger{
		background-position: 0px -192px;
	}
	&--orb{
		background-position: -256px -608px;
	}
	&--skull{
		background-position: -320px -0px;
	}


	// Size
	&--sm{
		transform: scale(.6);
	}
	&--md{
		transform: scale(1);
	}
	&--lg{
		transform: scale(1.2);
	}
}
</style>
