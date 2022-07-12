import { AxiosRequestConfig } from 'axios'
import service from './axios'
/**
 * @description ts 对axios的请求返回泛型支持
 * @author 郑泽伟
 */

export interface BaseResponse<T> {
  code: number
  success: boolean
  result: T
  message?: string
}
// 分页查询输入类型申明interface
export interface IPaginationReq {
  pageNo: number
  pageSize: number
}
// 分页查询的数据类型申明interface
export interface IPagination<T> {
  total: number
  list: Array<T>
  pageNum: number
  pageSize: number
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export default request
