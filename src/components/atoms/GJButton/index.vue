<template>
	<button
		class="gj-button"
		:class="[
			`gj-button--${size}`,
			`gj-button--${theme}`,
		]"
		@click="$emit('click', $event)"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		theme: {
			type: String,
			default: 'default' // primary | accent | warn
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		}
	}
}
</script>

<style lang="scss">
.gj-button{
	padding: 10px 20px;
	border: 2px solid transparent;
	border-radius: 4px;
	font-weight: 600;
	font-family: Roboto;
	position: relative;
	cursor: pointer;
	outline: none;
	transition: background .15s $easeInOutQuad;
	text-align: left;
	&:before{
		content: "";
		position: absolute;
		top: 60%;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 4px;
		background: linear-gradient(to bottom, transparent 0%, rgba(white, .3) 100%);
		transition: .15s $easeInOutQuad;
		opacity: 0;
	}
	&:hover,
	&:focus{
		&:before{
			opacity: 1;
		}
	}

	// Size
	&--sm{
		font-size: 13px;
	}
	&--md{
		font-size: 14px;
		padding: 12px 20px;
	}
	&--lg{
		font-size: 16px;
		padding: 15px 30px;
	}

	// Theme
	&--default{
		background: rgba(black, .6);
		color: rgba(white, .8);
		&:hover,
		&:focus{
			background: rgba(black, .7);
		}
	}
	&--primary{
		background: rgba($t-primary, .6);
		color: rgba(white, .8);
		&:hover,
		&:focus{
			background: rgba($t-primary, .7);
		}
	}
	&--accent{
		background: rgba($t-accent, .6);
		color: rgba(white, .8);
		&:hover,
		&:focus{
			background: rgba($t-accent, .7);
		}
	}
	&--warn{
		background: rgba($t-warn, .6);
		color: rgba(white, .8);
		&:hover,
		&:focus{
			background: rgba($t-warn, .7);
		}
	}
}
</style>
