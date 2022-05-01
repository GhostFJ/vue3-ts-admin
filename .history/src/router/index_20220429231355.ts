import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
