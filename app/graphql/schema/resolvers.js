const {
  allUsers,
  userById,
  userByEmail
} = require('../queries')

const {
  createUser
} = require('../mutations')

const resolvers = {
  Query: {
    allUsers,
    userById,
    userByEmail
  },
  Mutation: {
    createUser
  }
}

module.exports = { resolvers }
