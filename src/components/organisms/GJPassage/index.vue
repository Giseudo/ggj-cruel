<template>
	<div class="gj-passage" @click="onClick">
		<div class="gj-passage__header">
			<gj-name class="gj-passage__name" v-if="name">
				{{ name }}
			</gj-name>
		</div>

		<div class="gj-passage__scrollbar swiper-container">
			<div class="swiper-wrapper">
				<div class="gj-passage__body swiper-slide">
					<gj-text class="gj-passage__text" type="speech" :dark="true" v-html="speech">
					</gj-text>

					<gj-actions class="gj-passage__actions" :options="actions" />
				</div>
			</div>

			<div class="swiper-scrollbar"></div>
			<span class="gj-passage__arrow" v-if="actions.length == 0"></span>
		</div>
	</div>
</template>

<script>
import GJName from '@/components/atoms/GJName'
import GJText from '@/components/atoms/GJText'
import GJActions from '@/components/molecules/GJActions'
import { markdown } from 'markdown'
import Swiper from 'swiper'

export default {
	components: {
		'gj-name': GJName,
		'gj-text': GJText,
		'gj-actions': GJActions,
	},

	computed: {
		speech() {
			return markdown.toHTML(this.text)
		}
	},

	data: () => ({
		scrollbar: null
	}),

	watch: {
		text() {
			this.update()
		}
	},

	mounted() {
		this.scrollbar = new Swiper(this.$el.querySelector('.gj-passage__scrollbar'), {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			autoHeight: true,
			scrollbar: {
				el: this.$el.querySelector('.swiper-scrollbar'),
			},
			mousewheel: true,
		})

		setTimeout(() => {
			this.update()
		}, 200)
	},

	destroyed() {
		setTimeout(() => {
			this.scrollbar.destroy()
		}, 1000)
	},

	props: {
		name: {
			type: String,
			default: null
		},

		text: {
			type: String,
			default: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim urna non metus molestie facilisis eu non nisi. Nam commodo varius venenatis. Morbi in sem ac eros ultricies elementum.

Morbi vulputate tempor libero, quis sagittis justo porta et.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim urna non metus molestie facilisis eu non nisi. Nam commodo varius venenatis. Morbi in sem ac eros ultricies elementum.
			`
		},

		actions: {
			type: Array,
			default: () => ([])
		},

		next: {
			type: Function,
			default: null
		}
	},

	methods: {
		onClick() {
			if (this.actions.length == 0 && this.next)
				this.next()
		},

		update() {
			window.dispatchEvent(new Event('resize'))
			this.$nextTick(() => {
				this.scrollbar.update()
				setTimeout(() => {
					this.scrollbar.slideTo(0)
				}, 200)
			})
		}
	}
}
</script>

<style lang="scss">
.gj-passage{
	display: flex;
	flex-flow: column;
	&__header{
		display: flex;
		align-items: flex-end;
		padding: 10px;
		min-height: 45px;
	}
	&__name{
		flex-shrink: 0;
	}
	&__actions{
		flex: 1;
		padding-bottom: 20px;
	}
	&__scrollbar{
		width: 100%;
		flex: 1;
		position: relative;
		background: rgba(black, .4);
	}
	&__body{
		box-sizing: border-box;
		padding: 0px 20px;
		width: 100% !important;
		height: auto !important;
	}
	&__arrow{
		width: 0; 
		height: 0; 
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid white;
		animation-name: passage-arrow;
		animation-duration: .75s;
		animation-iteration-count: infinite;
		position: absolute;
		bottom: 20px;
		right: 20px;
		z-index: 10;
	}
}

@keyframes passage-arrow{
	0% {
		transform: translateY(0px);
		opacity: 1;
	}
	50% {
		transform: translateY(-5px);
		opacity: 0.3;
	}
	100% {
		transform: translateY(0px);
		opacity: 1;
	}
}
</style>
