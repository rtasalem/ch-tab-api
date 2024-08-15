const {
  allUsers,
  userByUserId,
  userByEmail
} = require('../queries')

const {
  createUser
} = require('../mutations')

const resolvers = {
  Query: {
    allUsers,
    userByUserId,
    userByEmail
  },
  Mutation: {
    createUser
  }
}

module.exports = { resolvers }
