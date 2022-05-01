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
    sidebar(): ISidebar {
      return this.sidebar,
    }，
    device: state => state.app.device,
  }
})
