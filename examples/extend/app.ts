import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'this is extend'
  }
})

axios.post(
  '/extend/post',
  { msg: 'this is extend.post' }
)

axios.get(
  '/extend/get',
  {
    params: {
      msg: 'this is get'
    }
  }
)

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'this is extend request'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'this is extend 22222'
  }
})

axios('/extend/user', {
  method: 'post',
  data: {
    msg: 'this is extend 22222'
  }
})

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUse<T>() {
  return axios<ResponseData<T>>('/extend/user1', {
    method: 'post',
    data: {
      message: '123321'
    }
  })
    .then(res => res.data)
    .catch(err => console.log(err))
}

async function test() {
  const user = await getUse<User>()
  console.log(user)
  if (user) {
    console.log(user.result.name)
  }
}

test()
