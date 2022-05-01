import request from '@/utils/request'

interface IResponse {
  status: number,
  msg: string,
}

I
export const getUserInfo = (token: string) => {
  return request<IResponse>({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function login(data: ) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}