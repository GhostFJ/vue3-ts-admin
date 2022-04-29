import { createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  }
]