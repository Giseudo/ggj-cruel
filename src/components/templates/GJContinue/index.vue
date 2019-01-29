<template>
	<div class="gj-continue">
		<div class="gj-continue__wrapper">
			<gj-text class="gj-continue__title" type="lead" :dark=true>
				Game Over
			</gj-text>

			<gj-button class="gj-continue__button" theme="default" @click="$emit('continue')">
				Último checkpoint	
			</gj-button>

			<gj-button class="gj-continue__button" theme="default" @click="$emit('quit')">
				Voltar para início
			</gj-button>
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
	}
}
</script>

<style lang="scss">
.gj-continue{
	background: linear-gradient(
		to top,
		rgba(33, 51, 78, 0.8) 0%,
		rgba(241, 18, 18, 0.41) 100%
	);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	min-height: 400px;
	&__wrapper{
		text-align: center;
		max-width: 300px;
		padding: 20px;
		box-sizing: border-box;
	}
	&__title{
		margin-bottom: 40px;
	}
	&__button{
		width: 100%;
		margin-bottom: 10px;
		text-align: center;
	}
}
</style>
