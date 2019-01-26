<template>
	<div class="gj-text"
		:class="[
			`gj-text--${type}`,
			{
				'is-dark': dark,
				'is-bold': bold
			}
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'body'
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
.gj-text{
	color: black;
	font-family: Arial;
	&--body{
		font-size: 14px;
	}

	&.is-dark{
		color: white;
	}
	&.is-bold{
		font-weight: 700;
	}
}
</style>
