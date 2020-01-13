<template>
  <transition name="header-fade-show">
    <div id="header" v-show="isShow"
      :style="{ background: headerBackground }">
      标题
    </div>
  </transition>
</template>
<script>
import { mixin } from '@utils/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    this.isShow = true
  }
}
</script>
<style lang="stylus" scoped>
#header
  position fixed
  height $header-height
  top 0
  width 100%
  z-index 10
// 顶部栏出现效果
.header-fade-show-enter-active
  transition all 0.5s ease
.header-fade-show-enter
  transform translateY(-100px)
  opacity 0
</style>
