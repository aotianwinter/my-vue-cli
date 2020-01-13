import config from '@config/layoutSettings'

const app = {
  state: {
    ...config,
    sideMenuList: [], // 侧边栏菜单列表
    currentPath: '', // 当前路径
    isCollapse: false // 侧边栏状态
  },
  mutations: {
    GET_SIDE_MENU_LIST (state, array) { // 获取路由列表
      state.sideMenuList = array
    },
    GET_CURRENT_PATH (state, path) { // 获取当前路径
      state.currentPath = path
    },
    CHANGE_IS_COLLAPSE (state) { // 改变侧边栏状态
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    getSideMenuList ({ commit }, array) {
      commit('GET_SIDE_MENU_LIST', array)
    },
    getCurrentPath ({ commit }, path) {
      commit('GET_CURRENT_PATH', path)
    },
    changeSideMenu ({ commit }) {
      commit('CHANGE_IS_COLLAPSE')
    }
  }
}

export default app
