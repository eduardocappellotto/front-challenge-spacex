import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Dashboard.vue')
  },
  {
    path: '/mission',
    name: 'Mission',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Mission.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
