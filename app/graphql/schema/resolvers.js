const {
  allUsers,
  userById,
  userByEmail
} = require('../queries')

const {
  createUser,
  deleteUserById,
  deleteUserByEmail
} = require('../mutations')

const resolvers = {
  Query: {
    allUsers,
    userById,
    userByEmail
  },
  Mutation: {
    createUser,
    deleteUserById,
    deleteUserByEmail
  }
}

module.exports = { resolvers }
