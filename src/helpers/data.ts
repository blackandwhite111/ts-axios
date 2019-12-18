import { isPlainObject } from './util'
import { type } from 'os'

export function transformRequest(data: any): any {
  // formData, arraybuffer, Blob等不需要转换，只对普通对象转换
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

// 如果接口返回的是一个json字符串，转换成json，方便开发
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      //
    }
  }
  return data
}
