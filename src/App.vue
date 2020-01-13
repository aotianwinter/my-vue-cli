<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // 此处需要注意，设置全局css样式
  height 100%
  overflow-x hidden
  // min-width 500px
</style>
