// ie polyfill
// dev install @babel/polyfill 即可
// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@styles/init.css' // 初始化css样式

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
