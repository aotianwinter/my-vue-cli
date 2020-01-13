<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>
      Home
    </el-breadcrumb-item>
    <template v-for="(item, index) in breadcrumbList">
      <el-breadcrumb-item v-if="breadcrumbObj[item]" :key="index">
        {{ breadcrumbObj[item] }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
import { mixin } from '@utils/mixin'
import { breadcrumbGenerate } from './breadcrumbHandle.js' // 引入路由处理
export default {
  mixins: [mixin],
  data () {
    return {
      breadcrumbObj: {}
    }
  },
  computed: {
    breadcrumbList () {
      return this.currentPath.substr(1).split('/')
    }
  },
  mounted () {
    // 根据sideMenuList自动生成面包屑
    this.breadcrumbObj = breadcrumbGenerate(this.sideMenuList)
  }
}
</script>

<style lang="stylus" scoped>
.breadcrumb
  font-size 14px
  padding 10px
</style>
