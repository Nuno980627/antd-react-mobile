import axios, { AxiosInstance } from 'axios'
// eslint-disable-next-line

const codeMessage: { [key: number]: string } = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 30 * 1000
  // withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // if (store.getters.getToken) {
    //   config.headers.Authorization = `Bearer ${getToken()}`
    // }
    // config.headers['x-csrf-token'] = getCsrfToken()
    return config
  },
  (error) => {
    // Toast.fail(error.toString())
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      // Toast.fail(res.message)
      return Promise.reject(res)
    } else {
      return response
    }
  },
  (error) => {
    const errorCode = (error.response && error.response.status) || 0
    const errorText = codeMessage[errorCode] || `其他错误:${error.message.toString()}`
    // Toast.fail(error.message.toString())
    return Promise.reject(error)
  }
)

export default service
