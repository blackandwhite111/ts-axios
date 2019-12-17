import axios from '../../src/index'

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
})

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: {
            bar: 'baz'
        }
    }
})

const date = new Date();
axios({
    method: 'get',
    url: '/base/get',
    params: {
        date: date
    }
})

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ' +  @,$, '
    }
})