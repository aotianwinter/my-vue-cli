import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js' // 引入状态管理
import { asyncRouterMap } from './router.config.js'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})

router.beforeEach((to, from, next) => {
  store.commit('changeBreadcrumb', to.path)
  next()
})

export default router
