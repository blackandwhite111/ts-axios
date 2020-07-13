import axios, { AxiosTransformer } from '../../src/index'
import Axios from '../../src/core/axios';
import qs from 'qs';

axios.defaults.headers.common['text2'] = '123';

// axios({
//   method: 'post',
//   url: '/config/post',
//   data: 'a=1&b=2',        // 数据用这种形式提交，会以formData提交
//   headers: {
//     test: '321'
//   }
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   transformRequest: [
//     (function(data) {
//       return qs.stringify(data)
//     }), 
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]), function(data) {
//       if(typeof data === 'object') {
//         data.b = 25;
//       }
//       return data
//     }
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// }).then(res=>{
//   console.log(res.data)
// })


const instance = axios.create({
  transformRequest: [
    (function(data) {
      return qs.stringify(data)
    }), 
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]), function(data) {
      if(typeof data === 'object') {
        data.b = 26;
      }
      return data
    }
  ],
  
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then(res=>{
  console.log(res.data)
})