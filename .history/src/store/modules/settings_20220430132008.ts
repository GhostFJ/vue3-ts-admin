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
    setSetting ({ key: string, value: boolean }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  }
})
