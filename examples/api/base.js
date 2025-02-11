module.exports = function (router) {
    router.get('/base/get', function(req, res) {
        res.json(req.query)
      })
      
      router.post('/base/post', function(req, res) {
        res.json(req.body)
      })
      
      router.post('/base/buffer', function(req, res) {
        let msg = []
        req.on('data', (chunk) => {
          if (chunk) {
            msg.push(chunk)
          }
        })
        req.on('end', () => {
          let buf = Buffer.concat(msg)
          res.json(buf.toJSON())
        })
      })
}