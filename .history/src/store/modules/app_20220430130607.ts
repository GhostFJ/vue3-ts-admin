import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

interface ISidebar {
  opened: boolean;
  withoutAnimation: boolean;
}

export interface IAppState {
  sidebar: ISidebar;
  device: string;
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+(Cookies.get('sidebarStatus') as string) : true,
      withoutAnimation: false
    },
    device: 'desktop'
  }),
  getters: {
    getSidebar (): ISidebar {
      return this.sidebar
    },
    getDevice (): string {
      return this.device
    }
  },
  actions: {
    setSidebarOpen () {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false

      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
    },
    setSidebarClose (status: boolean) {
      Cookies.set('sidebarStatus', '0')
    }
  }
})
