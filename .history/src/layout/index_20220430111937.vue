<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <div
      v-if="device==='mobile'&&sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navbar, Sidebar, AppMain } from './components'
// import useResize from './useResize'
import {useStore} from '@/store/index'
import { computed } from 'vue';

const store = useStore()
const sidebar = computed(() => store.state.app.sidebar)
const device = computed(() => store.state.app.sidebar)
</script>

<style lang="css" scoped>

</style>
