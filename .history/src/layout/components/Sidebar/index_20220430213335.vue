<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="rgba(255, 255, 255, 0.7)"
    active-text-color="#2d8cf0"
    :collapse="store.sidebar.opened"
    router
  >
    <sidebar-item
      v-for="menu in options.routes"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import { useAppStore } from '@/store/modules/app'
import { useRouter } from 'vue-router'

const store = useAppStore()
const { options } = useRouter()
const menus = options.routes.map(e => ({
  path: e.path
}))
console.log(options)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

// ::-webkit-scrollbar {
//   display: none;
// }

::-webkit-scrollbar {
  display: none;
}
</style>
