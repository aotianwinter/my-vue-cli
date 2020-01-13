import { mapState } from 'vuex'

const mixin = {
  computed: {
    ...mapState({
      // header
      headerBackground: state => state.app.headerBackground,
      // sideMenu
      sideMenuBg: state => state.app.sideMenuBg,
      sideMenuTextColor: state => state.app.sideMenuTextColor,
      sideMenuActiveColor: state => state.app.sideMenuActiveColor
    })
  }
}

export { mixin }
