import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/app/Home.vue'
import dateEntrance from '@/views/data/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { // 入口页面
    path: '/',
    name: 'Home',
    component: Home
  },
  { // 数据页面
    path: '/home',
    name: 'Home',
    component: dateEntrance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
