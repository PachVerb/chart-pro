import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Http from '@/plugins/axios'
import Stomp from 'stompjs'
import {
  borderBox1,
  borderBox5,
  decoration8,
  decoration4,
  decoration9,
  decoration10,
  fullScreenContainer,
  decoration5,
  borderBox3,
  borderBox2,
  scrollBoard,
  activeRingChart
} from '@jiaminghi/data-view'
import Echart from 'echarts'
import '@/assets/css/normalize.css'
import '@/assets/css/global.styl'

Vue.use(fullScreenContainer)
Vue.use(borderBox1)
Vue.use(borderBox3)
Vue.use(borderBox2)
Vue.use(borderBox5)
Vue.use(decoration5)
Vue.use(decoration8)
Vue.use(decoration4)
Vue.use(decoration9)
Vue.use(decoration10)
Vue.use(scrollBoard)
Vue.use(activeRingChart)
Vue.use(Http)
Vue.prototype.$echarts = Echart
Vue.prototype.$stomp = Stomp
Vue.config.productionTip = false // 阻止vue启动生产提示

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
