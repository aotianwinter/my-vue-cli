import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  },
  state: {
    isCollapse: false, // 侧边栏状态
    activeMenuPath: '', // 侧边栏激活状态路径
    breadcrumb: [] // 面包屑状态
  },
  mutations: {
    changeIsCollapse (state) { // 改变侧边栏状态
      state.isCollapse = !state.isCollapse
    },
    changeBreadcrumb (state, toPath) { // 修改面包屑内容
      state.activeMenuPath = toPath
      state.breadcrumb = toPath.substr(1).split('/') // 去除第一个/ 并按照/切割
    }
  },
  actions: {
  },
  getters
})
