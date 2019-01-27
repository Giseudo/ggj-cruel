<template>
  <div id="app">
		<router-view>
		</router-view>
  </div>
</template>

<script>
import { disableBodyScroll } from 'body-scroll-lock'

export default {
	mounted() {
		disableBodyScroll(this.$el)
	}
}
</script>

<style lang="scss">
html, body{
	height: 100%;
	overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	display: flex;
	width: 100%;
	height: 100%;
}
</style>
