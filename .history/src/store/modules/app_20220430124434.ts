import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

export interface IAppState {
    opened: boolean,
    withoutAnimation: boolean
  device: string
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
    device: 'desktop'
  })
})

