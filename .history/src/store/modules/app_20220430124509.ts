import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

export interface IAppState {
  opened: boolean,
  withoutAnimation: boolean
  device: string
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    opened: Cookies.get('sidebarStatus') ? !!+ Cookies.get('sidebarStatus') as b : true,
    withoutAnimation: false,
    device: 'desktop'
  })
})

