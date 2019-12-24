module.exports = function (router) {
    router.post('/extend/post', function(req, res) {
        res.json(req.body)
      })
      router.get('/extend/get', function(req, res) {
        res.json(req.query)
      })
}