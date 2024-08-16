const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

module.exports = { apolloServer }
