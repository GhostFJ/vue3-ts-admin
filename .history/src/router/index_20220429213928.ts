import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
