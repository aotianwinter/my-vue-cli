import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import { asyncRouterMap } from './router.config.js'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})

router.beforeEach((to, from, next) => {
  store.dispatch('getCurrentPath', to.path) // 获取当前路径
  next()
})

export default router
