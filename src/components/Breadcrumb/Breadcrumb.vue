<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>
      Home
    </el-breadcrumb-item>
    <template v-for="(item, index) in $store.state.breadcrumb">
      <el-breadcrumb-item v-if="breadcrumbObj[item]" :key="index">
        {{ breadcrumbObj[item] }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
import { breadcrumbGenerate } from './breadcrumbHandle.js' // 引入路由处理
export default {
  data () {
    return {
      breadcrumbObj: {}
    }
  },
  mounted () {
    // 根据routerList自动生成面包屑
    this.breadcrumbObj = breadcrumbGenerate(this.$store.state.routerList)
  }
}
</script>

<style lang="stylus" scoped>
.breadcrumb
  font-size 14px
  padding 10px
</style>
