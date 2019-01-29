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
	font-family: Roboto;
	&--body{
		font-size: 14px;
	}
	&--speech{
		font-size: 14px;
		line-height: 24px;
		font-family: Roboto Slab;
	}
	&--tiny{
		font-size: 10px;
		line-height: 11px;
	}
	&--small{
		font-size: 12px;
	}
	&--lead{
		font-size: 46px;
	}

	&.is-dark{
		color: white;
	}
	&.is-bold{
		font-weight: 700;
	}

	blockquote{
		border-left: 2px solid white;
		margin: 0;
		padding-left: 30px;
	}
}
</style>
