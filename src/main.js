import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './assets/css/base.less'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './fonts/iconfont.css'

// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
