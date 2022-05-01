import defaultSettings from '@/settings/default'
import { defineStore } from 'pinia'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

interface ISettingState {
  showSettings: boolean,
  fixedHeader: boolean,
  sidebarLogo: boolean
}

export const useSettingStore = defineStore('app', {
  state: (): ISettingState => ({
    showSettings,
    fixedHeader,
    sidebarLogo
  }),
  actions: {
    CHANGE_SETTING: ({ key: st, value }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  }
})
