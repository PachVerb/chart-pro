import Axios from 'axios'

// 全局默认配置
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 构建实列
const Instance = Axios.create({
  baseURL: 'http://39.100.252.115:8099',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// 拦截器-请求
Instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截器-响应
Instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
// 接口
const API = {
  Login (Laddres: string, prams: object) {
    return Instance.post(Laddres, prams)
  },
  Regist (Raddres: string, prams: object) {
    return Instance.post(Raddres, prams)
  }
}
export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install (Vue: any) {
    Vue.prototype.$http = API
  }
}
