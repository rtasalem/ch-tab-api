const express = require('express')
const healthzRouter = express.Router()

healthzRouter.get('/healthz', (req, res) => {
  res.status(200).send('ok')
})

module.exports = healthzRouter
