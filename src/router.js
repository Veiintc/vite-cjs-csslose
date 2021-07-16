
import { createRouter, createWebHistory } from 'vue-router'
const b = () => import('./components/b.vue')
const routes = [
  {
    path: '/',
    name: 'b',
    component: b,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
