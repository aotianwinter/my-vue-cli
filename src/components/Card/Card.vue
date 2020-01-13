<template>
  <transition name="card-fade-show">
    <el-card class="box-card" v-show="isShow" shadow="hover">
      <div slot="header" class="card-header">
        <!-- Card左侧 菜单选项 -->
        <div class="card-header-left-menu">
          <slot name="cardTitle"></slot>
        </div>
      </div>
      <slot name="cardBody"></slot>
    </el-card>
  </transition>
</template>
<script>
export default {
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
.box-card
  min-height 800px
  width 100%
  .card-header
    // min-width 600px
    overflow hidden
    .card-header-left-menu
      float left
    .card-header-right-button-group
      float right
      line-height $card-button-group-height
// Card出现效果
.card-fade-show-enter-active
  transition all 1s ease
.card-fade-show-enter
  transform translateX(70px)
  opacity 0
</style>
