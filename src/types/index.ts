export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTION'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'


  /**
   *  url     请求地址路径
   *  method  请求方法
   *  data    post请求时的body体
   *  params  get请求时的参数
   */
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
