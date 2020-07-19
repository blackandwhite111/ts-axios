import axios, { AxiosTransformer, Canceler } from '../../src/index'
import Axios from '../../src/core/axios';
import qs from 'qs';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/cancel/get', {
    cancelToken: source.token
}).catch(function(e) {
    if(axios.isCancel(e)) {
        console.log('request canceled', e.message)
    }
})

setTimeout(() => {
    source.cancel('operation canceled by the user')

    axios.post('/cancel/post', {a: 1}, {cancelToken: source.token}).catch(function(e) {
        if(axios.isCancel(e)) {
            console.log(e.message)
        }
    })
}, 100);

let cancel: Canceler

axios.get('/cancel/get', {
    cancelToken: new CancelToken(c=>{
        cancel = c
    })
}).catch(function(e) {
    if(axios.isCancel(e)) {
        console.log('request canceled')
    }
})

setTimeout(() => {
    cancel()
}, 1200);