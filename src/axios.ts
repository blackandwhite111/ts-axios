import { AxiosInstance } from './types'
import Axios from './core/axios'
import { extend } from './helpers/util'

// 把request方法提取出来，this指向context，然后再把context的方法都赋到instance中，
// 这么做的目的就是 让axios可以是一个直接调用的方法，也可以调用类Axios的方法，比如axios.post()
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
