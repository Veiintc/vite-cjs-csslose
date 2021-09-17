
import { createRouter, createWebHashHistory } from 'vue-router'
const a = () => import('./components/a.vue')
const b = () => import('./components/b.vue')
const c = () => import('./components/c.vue')
const routes = [
  {
    path: '/',
    name: 'a',
    component: a,
  },
  {
    path: '/b',
    name: 'b',
    component: b,
  },
  {
    path: '/c',
    name: 'c',
    component: c,
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
