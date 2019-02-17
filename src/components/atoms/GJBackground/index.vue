<template>
	<div class="gj-background">
		<div class="gj-background__image"
			:style="{ backgroundImage: `url(${image})` }"
		>
		</div>

		<transition name="background-next">
			<div class="gj-background__next"
				v-if="next"
				:style="{ backgroundImage: `url(${next})` }"
			>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: 'https://placeimg.com/320/640/tech'
		}
	},

	data: () => ({
		image: null,
		next: null
	}),

	mounted() {
		this.image = this.value
	},
	
	watch: {
		value(value) {
			let vm = this,
				image = new Image()

			image.src = value

			// Preload image
			image.onload = function(event) {
				vm.next = value

				setTimeout(() => {
					vm.image = value
					vm.next = null
				}, 3000)
			}
		}
	}
}
</script>

<style lang="scss">
.gj-background{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	overflow: hidden;
	&__image,
	&__next{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-size: cover;
		background-position: center;
	}
}
</style>
