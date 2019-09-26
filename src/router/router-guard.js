import store from '../store'

export default function (to, from, next) {
  store.dispatch('auth/autoLogin')
  const user = store.getters['auth/getUser']
  if (user) {
    next()
  } else {
    next('/login?loginError=true')
  }

}
