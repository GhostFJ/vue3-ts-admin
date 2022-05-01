import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '/api'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 统一处理接口响应错误处理：如token过期无效、服务端异常
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default (config: AxiosRequestConfig) => {
  
}
