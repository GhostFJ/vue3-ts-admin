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
    }
  }
})


