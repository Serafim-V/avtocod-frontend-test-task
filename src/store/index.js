import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import reports from './reports'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    reports
  }
})
