const express = require('express')
const healthyRouter = express.Router()

healthyRouter.get('/healthy', (req, res) => {
  res.status(200).send('ok')
})

module.exports = healthyRouter
