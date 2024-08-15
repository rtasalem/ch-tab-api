const { allUsers } = require('./all-users')
const { userByUserId } = require('./user-by-user-id')
const { userByEmail } = require('./user-by-email')

module.exports = {
  allUsers,
  userByUserId,
  userByEmail
}
