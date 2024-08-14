const Hapi = require('@hapi/hapi')
// const { cosmosConfig } = require('./config')

// if (cosmosConfig.isDev) {
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
// }

const server = Hapi.server({
  port: '3001'
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = { server }
