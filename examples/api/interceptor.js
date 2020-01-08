module.exports = function (router) {
  router.get('/interceptor/get', function(req, res) {
    res.json({
      msg: 'hello world'
    })
  })
}
