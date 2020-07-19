const base = require('./base')
const error = require('./error')
const extend = require('./extend')
const simple = require('./simple')
const interceptor = require('./interceptor')
const config = require('./config')
const cancel = require('./cancel')
const more = require('./more')

module.exports = function api (router) {
    base(router)
    error(router)
    extend(router)
    simple(router)
    interceptor(router)
    config(router)
    cancel(router)
    more(router)
}
