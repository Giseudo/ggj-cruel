import Vue from 'vue'
import Router from 'vue-router'
import GJGame from '@/components/pages/GJGame'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '',
			name: 'game',
			component: GJGame
		},
		{
			path: '/:passage',
			name: 'passage',
			component: GJGame
		}
	]
})
