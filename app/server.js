const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  port: '3001'
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = { server }
