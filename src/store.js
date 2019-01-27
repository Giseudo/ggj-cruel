import Vue from 'vue'
import Vuex from 'vuex'
import game from './storeModules/game'
import audio from './storeModules/audio'
import notification from './storeModules/notification'
import scene from './storeModules/scene'

Vue.use(Vuex)

// Create Modules object
const modules = {
	game,
	audio,
	notification,
	scene
}

// Dynamically import and namespace Vuex modules
const req = require.context('./storeModules', true, /\.\/.+\/index\.js$/)

req.keys().forEach(key => {
  let module = req(key)
  const moduleName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')

  modules[moduleName] = {
    namespaced: true,
    ...module.default
  }
})

export default new Vuex.Store({ modules })
