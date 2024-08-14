// const hapiApollo = require('@as-integrations/hapi').default
const { app, port } = require('./server')
// const { apolloServer } = require('./graphql/apollo-server')
const { initCosmos } = require('./cosmos/init')

const init = async () => {
  // await apolloServer.start()

  // await server.register({
  //   plugin: hapiApollo,
  //   options: {
  //     apolloServer,
  //     path: '/graphql',
  //     context: ({ request }) => {
  //       return { headers: request.headers }
  //     }
  //   }
  // })

  app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`)
  })
  await initCosmos()
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
