<template>
  <div class="main-layout">
    <!-- 顶部导航 -->
    <Header/>
    <!-- 左侧导航栏 -->
    <div class="layout-sider" :class="{ collapse: $store.state.isCollapse }">
      <SideMenu/>
    </div>
    <!-- 右侧内容区 -->
    <div class="layout-body">
      <div class="main-content">
        <!-- 面包屑 -->
        <Breadcrumb/>
        <!-- 内容 -->
        <router-view/>
      </div>
      <!-- 底部信息 -->
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from '@comp/Header/Header'
import SideMenu from '@comp/SideMenu/SideMenu'
import Breadcrumb from '@comp/Breadcrumb/Breadcrumb'
import Footer from '@comp/Footer/Footer'
export default {
  components: {
    Header,
    SideMenu,
    Footer,
    Breadcrumb
  }
}
</script>
<style lang="stylus" scoped>
.main-layout
  width 100%
  height 100%
  display flex
  padding-top 60px
  .layout-sider
    width $sideMenuWidth
    height 100%
    position relative
    overflow hidden
    transition all 0.4s ease
  .layout-body
    flex 1
    position relative
    .main-content
      padding 0 10px
      min-height 100%
      // border 1px solid red
  .collapse
    width 64px !important
</style>
