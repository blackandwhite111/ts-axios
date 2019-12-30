module.exports = function(router) {
  router.post('/extend/post', function(req, res) {
    res.json(req.body)
  })
  router.get('/extend/get', function(req, res) {
    res.json(req.query)
  })
  router.post('/extend/user', function(req, res) {
    res.json({
      code: 0,
      message: 'ok',
      result: {
        name: '1',
        age: 22
      }
    })
  })
}
