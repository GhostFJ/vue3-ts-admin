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
  // other options...
})

const state: (): IAppState => ({
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop'
})

