

import axios from 'axios'
import { FAILED } from '../constants/response'

const instance = axios.create({
  baseURL: DEV_USE_MOCK ? '/mock/' : '/',
})

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => (
    Promise.resolve({
      code: FAILED,
      data: { error },
      message: '网络错误，请重试'
    })
  )
)

export const get = (url: string, params: object):Promise<response> => instance.get(url, { params })
export const post = (url: string, params: object):Promise<response> => instance.post(url, params)
export default instance