<template>
  <transition name="menu-fade-show">
    <div v-show="isShow" id="sidebar" :style="{ background: sideMenuBg }"
    :class="{ collapse: sideMenuStatus }">
      <!-- 统一规划 -->
      <el-menu :default-active="activeMenu" class="side-menu"
        :text-color="sideMenuTextColor" :active-text-color="sideMenuActiveColor"
        :background-color="sideMenuBg"
        :collapse="sideMenuStatus"
        unique-opened router
      >
        <template v-for="menu in sideMenuList">
          <!-- 普通菜单 -->
          <template v-if="menu.isRoot">
            <el-menu-item v-if="!menu.hidden" :key="menu.index" :index="menu.index">
              <i :class="menu.iconClass" :style="{ color: menu.index === activeMenuIcon ? sideMenuActiveColor : '' }"></i>
              <span slot="title">{{ menu.title }}</span>
            </el-menu-item>
          </template>
          <!-- 折叠菜单 -->
          <template v-else>
            <el-submenu :key="menu.index" :index="menu.index">
              <template slot="title">
                <i :class="menu.iconClass" :style="{ color: menu.index === activeMenuIcon ? sideMenuActiveColor : '' }"></i>
                <span>{{ menu.title }}</span>
              </template>
              <template v-for="item in menu.group">
                <!-- 普通菜单项 -->
                <el-menu-item v-if="item.title && !item.hidden" :key="item.title" :index="item.index">
                  {{ item.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
      <div id="end">
        <i style="font-size: 30px;cursor: pointer" @click="changeIsCollapse"
          :class="sideMenuStatus ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
    </div>
  </transition>
</template>
<script>
import { mixin } from '@utils/mixin'
import { sideMenuGenerate } from './sideMenuHandle.js' // 引入路由处理
export default {
  mixins: [mixin],
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    activeMenuIcon () {
      return '/' + this.currentPath.substr(1).split('/')[0]
    },
    activeMenu () {
      // console.log('/' + this.currentPath.substr(1).split('/')[0])
      return this.currentPath // 保证页面跳转后激活状态及时更新
    }
  },
  mounted () {
    // 处理router信息 生成侧边菜单组
    this.$store.dispatch('getSideMenuList', sideMenuGenerate(this.$router.options.routes))
    this.autoChangeSideMenuCollapse()
    this.isShow = true
  },
  methods: {
    changeIsCollapse () {
      this.$store.dispatch('changeSideMenu')
    },
    autoChangeSideMenuCollapse () { // 窗口变更自动收缩侧边栏
      let x = window.matchMedia('(max-width: 1200px)')
      // 监听窗口变化 过窄收起侧边栏 过宽展开侧边栏
      const listenScreenWidth = (x) => {
        if (x.matches) { // 媒体查询
          if (!this.sideMenuStatus) {
            this.changeIsCollapse()
          }
        } else {
          if (this.sideMenuStatus) {
            this.changeIsCollapse()
          }
        }
      }
      listenScreenWidth(x) // 执行时调用的监听函数
      x.addListener(listenScreenWidth) // 状态改变时添加监听器
    }
  }
}
</script>
<style lang="stylus" scoped>
#sidebar
  position fixed
  z-index 10
  bottom 0
  width $sideMenuWidth
  top 60px
  font-weight 400
  overflow hidden
  transition all 0.4s ease
  .side-menu
    text-align left
    border-right none
    &:not(.el-menu--collapse)
      width $sideMenuWidth
    i
      color $side-menu-icon
#end
  color $side-menu-icon
  position absolute
  bottom 0
  left 0
  width 100%
  padding-bottom 20px
// 侧边栏出现效果
.menu-fade-show-enter-active
  transition all 1s ease
.menu-fade-show-enter
  transform translateX(-100px)
  opacity 0
</style>
