<template>
	<button
		class="gj-previous"
		:class="[
			`gj-previous--${size}`
		]"
		@click="$emit('click', $event)"
	>
		<svg class="gj-previous__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
		</svg>
	</button>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'md' // sm | md | lg
		}
	}
}
</script>

<style lang="scss">
.gj-previous{
	cursor: pointer;
	background: transparent;
	position: relative;
	border: 0;
	transition: .3s $easeInOutQuad;
	outline: none;
	&:before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(white, 0.6);
		transform: rotate(45deg) scale(3) translate(0%, 30%);
	}
	&__icon{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	path {
		fill: $c-black;
	}
	&:hover{
		.gj-previous{
			&__icon{
				animation-name: previous-arrow;
				animation-iteration-count: infinite;
				animation-transition: $easeInOutQuad;
				animation-duration: .6s;
			}
		}
	}

	// Sizes
	&--sm{
		width: 32px;
		height: 32px;
		.gj-previous{
			&__icon{
				width: 16px;
				height: 16px;
			}
		}
	}
	&--md{
		width: 44px;
		height: 44px;
		.gj-previous{
			&__icon{
				width: 24px;
				height: auto;
			}
		}
	}
	&--lg{
		width: 56px;
		height: 56px;
		.gj-previous{
			&__icon{
				width: 32px;
				height: auto;
			}
		}
	}

	@keyframes previous-arrow{
		0% {
			left: 50%;
		}
		25% {
			left: 55%;
		}
		50% {
			left: 45%;
		}
		100% {
			left: 50%;
		}
	}
}
</style>
