const { app, port } = require('./server')
const { apolloServer } = require('./graphql')
const { initCosmos } = require('./cosmos/init')

const init = async () => {
  await apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql' })
  })

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
