import store from '../store'

export default function (to, from, next) {
  store.dispatch('autoLogin')
  const user = store.getters.getUser
  if (user) {
    next()
  } else {
    next('/login?loginError=true')
  }

}
