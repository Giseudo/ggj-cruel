<template>
	<div
		class="gj-continue"
		:class="{
			'was-beat': beat
		}"
	>
		<div class="gj-continue__wrapper">
			<gj-text class="gj-continue__title" type="lead" :dark="true">
				Game Over
			</gj-text>

			<gj-text v-if="message" class="gj-continue__title" type="speech" :dark="true">
				{{ message }}
			</gj-text>

			<div class="gj-continue__actions">
				<gj-button v-if="!beat" class="gj-continue__button" theme="default" @click="$emit('continue')">
					Último checkpoint	
				</gj-button>

				<gj-button class="gj-continue__button" theme="default" @click="$emit('quit')">
					Voltar para início
				</gj-button>
			</div>
		</div>
	</div>
</template>

<script>
import GJButton from '@/components/atoms/GJButton'
import GJText from '@/components/atoms/GJText'

export default {
	components: {
		'gj-button': GJButton,
		'gj-text': GJText
	},

	props: {
		beat: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: 'Game Over'
		},
		message: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss">
.gj-continue{
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	min-height: 400px;
	position: absolute;
	&:before{
		content: "";
		position: absolute;
		display: block;
		background: linear-gradient(
			to top,
			rgba(33, 51, 78, 0.8) 0%,
			rgba(241, 18, 18, 0.41) 100%
		);
		width: 150%;
		height: 150%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&__wrapper{
		text-align: center;
		max-width: 300px;
		padding: 20px;
		box-sizing: border-box;
	}
	&__actions{
		padding-top: 40px;
	}
	&__button{
		width: 100%;
		margin-bottom: 10px;
		text-align: center;
	}

	&.was-beat{
		&:before{
			background: linear-gradient(
			to top,
			rgba(black, .8) 0%,
			rgba(black, .4) 100%,
			)
		}
	}
}
</style>
