import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import vuescroll from 'vuescroll'

Vue.use(VueRouter)
Vue.use(vuescroll) // 滚动组件

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
