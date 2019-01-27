<template>
	<div class="gj-actions">
		<div class="gj-actions__option"
			v-for="(option, index) in options"
			@click="option.callback"
		>
			<div class="gj-actions__prefix">
				<gj-sprite
					v-if="option.type == 'cast'"
					class="gj-actions__sprite"
					name="wand"
					size="sm"
				/>

				<gj-sprite
					v-if="option.type == 'buy'"
					class="gj-actions__sprite"
					name="gold"
					size="sm"
				/>

				<gj-text
					v-if="option.cost"
					class="gj-actions__cost"
					type="small"
					:dark="true"
					:bold="true"
				>
					{{ option.cost }}
				</gj-text>
			</div>

			<gj-button
				class="gj-actions__button"
				size="sm"
				:theme="getTheme(option.type)"
			>
				{{ option.label }}
			</gj-button>
		</div>
	</div>
</template>

<script>
import GJSprite from '@/components/atoms/GJSprite'
import GJButton from '@/components/atoms/GJButton'
import GJText from '@/components/atoms/GJText'

export default {
	components: {
		'gj-sprite': GJSprite,
		'gj-button': GJButton,
		'gj-text': GJText,
	},

	props: {
		options: {
			type: Array,
			default: () => ([
				{
					label: 'Correr para as colinas',
					callback: () => {}
				},
				{
					label: 'Esconder-se',
					callback: () => {}
				},
				{
					type: 'cast',
					cost: 90,
					label: 'Conjurar uma mágia',
					callback: () => {}
				},
				{
					type: 'buy',
					cost: 40,
					label: 'Comprar adaga',
					callback: () => {}
				}
			])
		}
	},

	methods: {
		getTheme(type) {
			if (type == 'cast')
				return 'primary'
			else if (type == 'buy')
				return 'warn'
			else
				return 'default'
		}
	}
}
</script>

<style lang="scss">
.gj-actions{
	&__option{
		position: relative;
		margin-bottom: 2px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	&__prefix{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 5;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 42px;
		background: rgba(white, .1);
		border-radius: 4px 0 0 4px;
	}
	&__cost{
		transform: scale(.8) translateY(-5px);
	}
	&__sprite{
	}
	&__button{
		width: 100%;
		padding-left: 50px;
		padding-right: 10px;
	}
}
</style>
