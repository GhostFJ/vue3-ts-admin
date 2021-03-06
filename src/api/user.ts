import request from '@/utils/request'
import type { ILoginData } from '#/user'

interface IResponse {
  status: number;
  msg: string;
}

export const getUserInfo = (token: string) => {
  return request<IResponse>({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function login (data: ILoginData) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function logout (token: string) {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
