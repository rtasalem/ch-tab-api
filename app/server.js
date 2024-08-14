// const Hapi = require('@hapi/hapi')

// const server = Hapi.server({
//   port: '3001'
// })

// const routes = [].concat(
//   require('./routes/healthy'),
//   require('./routes/healthz')
// )

// server.route(routes)

// module.exports = { server }

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
