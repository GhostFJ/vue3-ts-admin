import defaultSettings from '@/settings/default'
import { defineStore } from 'pinia'

interface ISettingState {
  showSettings: boolean,
  fixedHeader: boolean,
  sidebarLogo: boolean
}
export const useSettingStore = defineStore('app', {
  state: (): ISettingState => ({
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
    setSidebarClose (withoutAnimation: boolean) {
      Cookies.set('sidebarStatus', '0')
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
    setDeviceToggle (device: string) {
      this.device = device
    }
  }
})


const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  showSettings,
  fixedHeader,
  sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting ({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
