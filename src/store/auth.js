const cookie = require('cookie')
export default {
  state: {
    user: null
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    setUser(state, username) {
      state.user = username
      const setCookie = cookie.serialize('user', username, {
        maxAge: 60 * 60
      })
      document.cookie = setCookie
    },
    logout(state) {
      state.user = null
    },
  },
  actions: {
    autoLogin() {
      const username = cookie.parse(document.cookie).user
      if (username === 'username') {
        this.commit('setUser', username)
      }
    },
    logout() {
      this.commit('logout')
      const setCookie = cookie.serialize('user', '')
      document.cookie = setCookie
    }
  }
}
