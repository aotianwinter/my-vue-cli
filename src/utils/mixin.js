import { mapState } from 'vuex'

const mixin = {
  computed: {
    ...mapState({
      // header
      headerBackground: state => state.app.headerBackground,
      // sideMenu
      sideMenuBg: state => state.app.sideMenuBg,
      sideMenuTextColor: state => state.app.sideMenuTextColor,
      sideMenuActiveColor: state => state.app.sideMenuActiveColor,
      // others
      sideMenuList: state => state.app.sideMenuList, // 侧边栏菜单列表
      currentPath: state => state.app.currentPath, // 当前激活路由
      sideMenuStatus: state => state.app.isCollapse // 侧边栏状态
    })
  }
}

export { mixin }
