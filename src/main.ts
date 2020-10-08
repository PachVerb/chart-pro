import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Echart from 'echarts'

Vue.prototype.$echarts = Echart
Vue.config.productionTip = false // 阻止vue启动生产提示

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
