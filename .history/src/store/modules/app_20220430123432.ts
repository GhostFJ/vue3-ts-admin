import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

export interface ISidebar {
  opened: boolean,
  withoutAnimation: boolean
}

export interface IAppState {
  siderbar: ISidebar,
  device: string
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    device: 'desktop'
  })
})



