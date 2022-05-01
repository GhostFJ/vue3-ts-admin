<template>
  <div :class="{'has-logo':showLogo}">
    <logo
      v-if="showLogo"
      :collapse="isCollapse"
    />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vu'
import variables from '@/styles/variables.scss'
import { useAppStore } from '@/store/modules/app'
import { useSettingStore } from '@/store/modules/settings'
import { useRouter, useRoute } from 'vue-router'

const appStore = useAppStore()
const settingStore = useSettingStore()
const { options } = useRouter()

const routes = options.routes

const activeMenu = () => {
  const route = useRoute()
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
}

const showLogo = () => {
  return settingStore.sidebarLogo
}

const isCollapse = () => {
  return !appStore.sidebar.opened
}
</script>
