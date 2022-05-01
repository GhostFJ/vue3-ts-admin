import Cookies from 'js-cookie'

export interface ISidebar {
  opened: boolean,
  withoutAnimation: boolean
}

export interface IAppState {
  siderbar: ISidebar,
  device: string
}

const state: (): IAppState => ({
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop'
})

