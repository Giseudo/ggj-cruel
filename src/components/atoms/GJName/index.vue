<template>
	<div class="gj-name">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss">
.gj-name{
	background: rgba(black, .8);
	display: inline-block;
	font-family: Roboto;
	padding: 3px 10px;
	border-radius: 4px;
	font-size: 14px;
	color: white;
	font-weight: 600;
	opacity: .8;
}
</style>
