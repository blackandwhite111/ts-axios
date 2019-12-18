import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// config 会有多个处理，所以用processConfig方法，里面包括对conig的各种处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.data = transformRequestData(config);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

export default axios
