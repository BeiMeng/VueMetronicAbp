import Vue from 'vue'
import Vuex from 'vuex'

import tabView from './modules/tagsView'
import sideBar from './modules/sideBar'
import appSession from './modules/appSession'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sideBar,
    tabView,
    appSession
  },

})

export default store
