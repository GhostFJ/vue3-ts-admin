<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="rgba(255, 255, 255, 0.7)"
    active-text-color="#2d8cf0"
    :collapse="$store.state.isCollapse"
    router
  >
    <menu-item
      v-for="menu in $store.state.menus"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

</script>

<style lang="css" scoped>

</style>
