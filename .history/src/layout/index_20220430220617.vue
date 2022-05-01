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
        <!-- <Navbar /> -->
      </el-header>

      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { Sidebar, AppMain } from './components'
// import useResize from './useResize'
import { useAppStore } from '@/store/modules/app'

import { computed } from '@vue/runtime-core'

const appStore = useAppStore()

const sidebar = computed(() => appStore.sidebar)
const device = computed(() => appStore.device)

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))

</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>
