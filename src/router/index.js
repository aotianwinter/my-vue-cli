import Vue from 'vue'
import VueRouter from 'vue-router'

import { asyncRouterMap } from './router.config.js'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})

export default router
