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
    setSetting (value: boolean) {
      this.showSettings = value
    }
    setHeaderSetting (value: boolean) {
      this.showSettings = value
    }
    setSetting (value: boolean) {
      this.showSettings = value
    }
  }
})
