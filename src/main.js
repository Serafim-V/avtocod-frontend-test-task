import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import {MediaQueries} from 'vue-media-queries'

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
  mediaQueries
}).$mount('#app')
