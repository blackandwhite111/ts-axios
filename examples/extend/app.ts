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
    {msg: 'this is extend.post'}
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
