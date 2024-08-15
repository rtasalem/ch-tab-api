const { allUsers } = require('./all-users')
const { userById } = require('./user-by-id')
const { userByEmail } = require('./user-by-email')

module.exports = {
  allUsers,
  userById,
  userByEmail
}
