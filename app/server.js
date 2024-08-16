const express = require('express')
const healthyRouter = require('./routes/healthy')
const healthzRouter = require('./routes/healthz')

const app = express()
const port = 3001

app.use(healthyRouter)
app.use(healthzRouter)

module.exports = {
  app,
  port
}
