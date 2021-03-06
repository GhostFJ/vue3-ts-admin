import { login, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'
import { defineStore } from 'pinia'
import type { ILoginData } from '#/user'

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
    resetState () {
      this.token = getToken()
      this.name = ''
      this.avatar = ''
    },
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
    login (userInfo: ILoginData) {
      const { username, password } = userInfo
      return new Promise<void>((resolve, reject) => {
        login({ username: username.trim(), password }).then(response => {
          console.log(response)
          const { data } = response
          this.token = data.token
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // get user info
    getInfo () {
      return new Promise((resolve, reject) => {
        getUserInfo(this.token as string).then(response => {
          const { data } = response

          if (!data) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject('Verification failed, please Login again.')
          }

          const { name, avatar } = data

          this.name = name
          this.avatar = avatar
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // user logout
    logout () {
      return new Promise((resolve, reject) => {
        logout(this.token as string).then(() => {
          removeToken() // must remove  token  first
          // resetRouter()
          this.resetState()
          resolve(null)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // remove token
    resetToken () {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        this.resetState()
        resolve(null)
      })
    }
  }
})
