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
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
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

// 定义一个错误类型 继承 Error
export interface AxiosError extends Error {
  isAxiosError: boolean
  message: string
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise

  head(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config: AxiosRequestConfig): AxiosPromise
}
