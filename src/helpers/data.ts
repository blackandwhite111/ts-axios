import { isPlainObject } from './util'

export function transformRequest (data: any): any {
    // formData, arraybuffer, Blob等不需要转换，只对普通对象转换
    if(isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data
}