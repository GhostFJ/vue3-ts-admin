<template>
  <el-container
    :class="classObj"
    class="app-wrapper"
  >
    <el-aside>
      <Sidebar class="sidebar-container" />
    </el-aside>
    <el-container class="main-container">
      <el-header>
        <Navbar />
      </el-header>
    </el-container>
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        
      </div>
      <app-main />
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { Navbar, Sidebar, AppMain } from './components'
// import useResize from './useResize'
import { useAppStore } from '@/store/modules/app'
import { useSettingStore } from '@/store/modules/settings'
import { computed } from 'vue'

const appStore = useAppStore()
const settingStore = useSettingStore()
const sidebar = computed(() => appStore.sidebar)
const device = computed(() => appStore.device)
const fixedHeader = computed(() => settingStore.fixedHeader)

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))

const handleClickOutside = () => {
  appStore.setSidebarClose(false)
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
