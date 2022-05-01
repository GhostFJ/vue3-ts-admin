import { login, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'
import { defineStore } from 'pinia'
interface IUserState {
  token: string | undefined;
  name: string;
  avatar: string;
}

export const useUseStore = defineStore('user', {
  state: ():IUserState => ({
    token: getToken(),
    name: '',
    avatar: ''
  }),
  getters: {
    getToken (): string| undefined {
      return this.token
    },
    getName (): string {
      return this.name
    },
    getAvatar (): string {
      return this.avatar
    }
  },
  actions: {
    setToken (token: string) {
      this.token = token
    },
    setName (name: string) {
      this.name = name
    },
    setAvatar (avatar: string) {
      this.avatar = avatar
    },
    // user login
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password }).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // get user info
    getInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const { data } = response

          if (!data) {
            return reject('Verification failed, please Login again.')
          }

          const { name, avatar } = data

          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // user logout
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('RESET_STATE')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // remove token
    resetToken ({ commit }) {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      })
    }
  }
})
