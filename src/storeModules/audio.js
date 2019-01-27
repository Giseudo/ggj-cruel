import Vue from 'vue'
import { Howl, Howler } from 'howler'

export default {
	namespaced: true,
	state: {
		keyword: '',
		background: null,
		musics: {
			'great-unknown': require('@/assets/audios/musics/great-unknown.mp3')
		},
		sounds: {
			'punch': require('@/assets/audios/effects/punch-01.mp3')
		},
	},

	getters: {
		//
	},

	mutations: {
		play(state, sound) {
			new Howl({
				autoplay: true,
				src: [state.sounds[sound]]
			})
		},

		music(state, music) {
			state.background = new Howl({
				autoplay: true,
				volume: 0.5,
				loop: true,
				src: [state.musics[music]]
			})
		},

		stop(state, music) {
			if (state.background)
				state.background.pause()
		}
	},

	actions: {
		//
	}
}
