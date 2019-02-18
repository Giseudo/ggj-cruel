import Vue from 'vue'
import { Howl, Howler } from 'howler'

export default {
	namespaced: true,
	state: {
		keyword: '',
		background: null,
		musics: {
			'great-unknown': require('@/assets/audios/musics/great-unknown.mp3'),
			'dark-tension-rising': require('@/assets/audios/musics/dark-tension-rising.mp3')
		},
		sounds: {
			'click': require('@/assets/audios/effects/click-01.wav'),
			'punch': require('@/assets/audios/effects/punch-01.mp3'),
			'wolf-01': require('@/assets/audios/effects/wolf-01.wav'),
			'sword-01': require('@/assets/audios/effects/sword-01.mp3'),
			'arrow-01': require('@/assets/audios/effects/arrow-01.wav'),
			'explosion-01': require('@/assets/audios/effects/explosion-01.wav'),
			'thunder-01': require('@/assets/audios/effects/thunder-01.mp3'),
			'fire-01': require('@/assets/audios/effects/fire-01.mp3')
		},
	},

	getters: {
		//
	},

	mutations: {
		play(state, payload) {
			if (typeof payload === 'object') {
				new Howl({
					autoplay: true,
					src: [state.sounds[payload.name]],
					volume: payload.volume
				})

			} else {
				new Howl({
					autoplay: true,
					src: [state.sounds[payload]]
				})
			}
		},

		music(state, music) {
			state.background = new Howl({
				autoplay: true,
				volume: 0.3,
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
