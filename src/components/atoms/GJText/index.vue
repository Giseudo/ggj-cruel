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
	opacity: .8;
	&--body{
		font-size: 14px;
	}
	&--speech{
		font-size: 16px;
		line-height: 26px;
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
		font-family: Roboto Slab;
	}

	&.is-dark{
		color: white;
	}
	&.is-bold{
		font-weight: 700;
	}

	blockquote{
		border-left: 2px solid white;
		margin: 16px 0;
		padding: 8px 24px;
		font-style: italic;
		font-size: 20px;
	}
}
</style>
