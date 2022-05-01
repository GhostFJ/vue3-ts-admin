import request from '@/utils/request'

interface IResponse {
  status: number;
  msg: string;
}

interface ILoginData {
  name: string;
  password: number;
}

export const getUserInfo = (token: string) => {
  return request<IResponse>({
    url: '/api/user/info',
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

export function logout () {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
