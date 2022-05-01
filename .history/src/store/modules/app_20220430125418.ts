import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

export interface IAppState {
  opened: boolean,
  withoutAnimation: boolean
  device: string
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    siderbar: {
      opened: Cookies.get('sidebarStatus') ? !!+(Cookies.get('sidebarStatus') as string) : true,
      withoutAnimation: false,
    }
      
    device: 'desktop'
  })
})



