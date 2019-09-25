import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import authGuard from './router-guard'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home,
      beforeEnter: authGuard
    },
    {path: '/login', component: Login}
  ]
})
