import axios from '../../src/index'
axios.defaults.headers.common['text2'] = '123';

axios({
  method: 'post',
  url: '/config/post',
  data: 'a=1&b=2',        // 数据用这种形式提交，会以formData提交
  headers: {
    test: '321'
  }
}).then(res=>{
  console.log(res)
})
