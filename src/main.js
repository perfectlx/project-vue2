import Vue from 'vue'
import App from './App.vue'
//import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import service from './service'
import echarts from 'echarts'
Vue.prototype.axios = axios //可以全剧使用

Vue.use(ElementUI)
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
