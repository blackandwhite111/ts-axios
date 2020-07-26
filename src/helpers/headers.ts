import { deepMerge, isPlainObject } from './util'
import { Method } from '../types'

// 例如 'Content-Type', 不一定都是传入首字母大写，写个格式化方法统一
function normalizeHeaderName(headers: any, normalizeName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(e => {
    if (normalizeName !== e && normalizeName.toUpperCase() === e.toUpperCase()) {
      headers[normalizeName] = headers[e]
      delete headers[e]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  // 判断只有普通对象 才给添加或者覆盖 content-type， 其他类型 如 formData 浏览器会自动识别分配的。
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      // 这里注意 最后不要加分号;
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(line => {
    let [key, ...vals] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    const val = vals.join(':').trim()
    parsed[key] = val
  })
  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }

  headers = deepMerge(headers.common, headers[method], headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']

  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
