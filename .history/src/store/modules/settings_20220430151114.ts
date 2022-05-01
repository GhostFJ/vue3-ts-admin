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
    setShowSetting (value: boolean) {
      this.showSettings = value
    },
    setHeaderSetting (value: boolean) {
      this.fixedHeader = value
    },
    setSideSetting (value: boolean) {
      this.sidebarLogo = value
    }
  }
})
