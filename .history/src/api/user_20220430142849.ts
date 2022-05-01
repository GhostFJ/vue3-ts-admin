import request from '@/utils/request'

interface ResponseData<T = any> {
  status: number,
  msg: string,
  data: T
}

export const getUserInfo = (token: string) => {
  return request<ResponseData>({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function login(data:) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}