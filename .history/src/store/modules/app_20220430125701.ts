import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

interface ISidebar {
  opened: boolean;
  withoutAnimation: boolean;
}

export interface IAppState {
  sidebar: {
    [key: string]: 
  };
  device: string;
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+(Cookies.get('sidebarStatus') as string) : true,
      withoutAnimation: false
    },
    device: 'desktop'
  })
})
