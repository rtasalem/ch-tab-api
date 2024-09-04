const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { createApollo4QueryValidationPlugin, constraintDirectiveTypeDefs } = require('graphql-constraint-directive/apollo4')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, typeDefs],
  resolvers
})

const plugins = [
  createApollo4QueryValidationPlugin()
]

const apolloServer = new ApolloServer({
  schema,
  plugins
})

module.exports = { apolloServer }
