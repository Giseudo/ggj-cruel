<template>
	<div
		class="gj-alert"
		:class="[
		]"
	>
		<gj-sprite class="gj-alert__sprite"
			:name="sprite"
		/>
		<gj-text :dark="true" class="gj-alert__message">
			{{ message }}
		</gj-text>
	</div>
</template>

<script>
import GJText from '@/components/atoms/GJText'
import GJSprite from '@/components/atoms/GJSprite'

export default {
	components: {
		'gj-text': GJText,
		'gj-sprite': GJSprite
	},

	props: {
		message: {
			type: String,
			default: 'Você recebeu 1x Orb Ilusório.'
		},
		sprite: {
			type: String,
			default: 'orb'
		}
	}
}
</script>

<style lang="scss">
.gj-alert{
	padding: 10px;
	border-radius: 4px;
	background: rgba(black, .6);
	display: flex;
	align-items: center;
	&__sprite{
		margin-right: 10px;
	}
	&__message{
		flex: 1;
	}
}
</style>
