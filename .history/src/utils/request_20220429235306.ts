import axios from 'axios'

const request = axios.create({
  baseURL: '/api'
})

// 请求拦截器
axios.interceptors()
// 响应拦截器
export default request