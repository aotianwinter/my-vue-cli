<template>
  <div class="home">
    <BasicLayout/>
  </div>
</template>

<script>
import { BasicLayout } from '@layouts'
export default {
  name: 'home',
  components: {
    BasicLayout
  }
}
</script>
<style lang="stylus" scoped>
.home
  width 100%
  height 100%
</style>
