// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import titleMenu from './components/titleMenu'
import echarts from 'echarts'
import Axios from 'axios'
import VueAxios from 'vue-axios'


Vue.prototype.$echarts = echarts
Vue.use(ElementUi)
Vue.use('titleMenu',titleMenu)
Vue.use(VueAxios,Axios);
//Axios.defaults.baseURL = 'http://localhost:8080/rams_v3'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
