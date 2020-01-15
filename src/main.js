// ie polyfill
// dev install @babel/polyfill 即可
// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import 'element-ui/lib/theme-chalk/index.css'
import '@styles/init.css' // 初始化css样式

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  store.dispatch('getCurrentPath', to.path) // 获取当前路径
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
