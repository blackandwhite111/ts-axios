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
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

// 定义返回响应数据的类型
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// 定义一个Promise返回类型，指定泛型AxiosResponse
export interface AxiosPromise extends Promise<AxiosResponse> {}
