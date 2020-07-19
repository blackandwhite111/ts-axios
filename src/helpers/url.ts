import { isDate, isPlainObject, isURLSearchParams } from './util'

interface URLOrigin {
  protocol: string
  host: string
}

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 空格变 + ， 约定的
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * function 处理get请求时  请求参数拼接到url上
 * 处理逻辑为：
 * 1. 参数为 数组            => arr[]=a1&arr[]=a2
 * 2. 参数为 Date类型        => Date.toISOString()
 * 3. 参数为 Object          => Object 先 stringify 再 encode 编码
 * 4. 参数为 特殊字符         => 支持特殊字符，并且空格变成 + 号
 * 5. 参数为 null            => 不拼接
 * 6. 参数带 哈希 #          => 忽略哈希值
 * 7. 已经带有参数的          => 保留参数并且在后面继续拼接
 */
export function buildURL(
  url: string,
  params?: any,
  paramsSerializer?: (params: any) => string
): string {
  if (!params) {
    return url
  }

  let serializeParams

  if (paramsSerializer) {
    serializeParams = paramsSerializer(params)
  } else if (isURLSearchParams(params)) {
    serializeParams = params.toString()
  } else {
    // 把params 变成数组，然后再拼接到url上
    const parts: string[] = []

    // 遍历params
    Object.keys(params).forEach(key => {
      const val = params[key]
      if (val === null || typeof val === 'undefined') {
        // 如果值不存在，那就跳过 继续下一个循环
        return
      }
      let values = []
      if (Array.isArray(val)) {
        //  values = [val+''];   数组形式拼接url以逗号形式传给后端
        values = val
        key += '[]'
      } else {
        values = [val]
      }
      values.forEach(val => {
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val)
        }

        // 字段和值都做下encode处理
        parts.push(`${encode(key)}=${encode(val)}`)
      })
    })

    serializeParams = parts.join('&')
  }

  if (serializeParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializeParams
  }

  return url
}

export function isAbsoluteURL(url: string): boolean {
  return /(^[a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function combineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}

// 是否是同源的
export function isURLSameOrigin(requestURL: string): boolean {
  const parsedOrigin = resolveURL(requestURL)
  return (
    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host
  )
}

const urlParsingNode = document.createElement('a')
const currentOrigin = resolveURL(window.location.href)

function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url)
  const { protocol, host } = urlParsingNode

  return {
    protocol,
    host
  }
}
