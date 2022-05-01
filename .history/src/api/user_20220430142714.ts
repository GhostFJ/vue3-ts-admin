import request from "@/utils/request";

interface ResponseData<T = any> {
  status: number,
  msg: string,
  data: T
}

export const getUserInfo = () => {
  return request<ResponseData>({
    url: '/api/user'
  })
}
