const base = require('./base')
const error = require('./error')
const extend = require('./extend')
const simple = require('./simple')
const interceptor = require('./interceptor')
const config = require('./config')

module.exports = function api (router) {
    base(router)
    error(router)
    extend(router)
    simple(router)
    interceptor(router)
    config(router)
}
