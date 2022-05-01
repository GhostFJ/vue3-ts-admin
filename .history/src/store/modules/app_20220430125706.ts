import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { ISidebar } from '../../../.history/src/store/modules/app_20220430124149';

interface ISidebar {
  opened: boolean;
  withoutAnimation: boolean;
}

export interface IAppState {
  sidebar: {
    [key: string]: ISidebar
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
