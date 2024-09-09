const {
  allUsers,
  userById,
  userByEmail
} = require('../queries')

const {
  createUser,
  deleteUserById,
  deleteUserByEmail,
  updateUserById
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
    deleteUserByEmail,
    updateUserById
  }
}

module.exports = { resolvers }
