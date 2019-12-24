const base = require('./base')
const error = require('./error')
const extend = require('./extend')
const simple = require('./simple')

module.exports = function api (router) {
    base(router)
    error(router)
    extend(router)
    simple(router)
}