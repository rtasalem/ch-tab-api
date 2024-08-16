const { createUser } = require('./create-user')
const { deleteUserById } = require('./delete-user-by-id')
const { deleteUserByEmail } = require('./delete-user-by-email')

module.exports = {
  createUser,
  deleteUserById,
  deleteUserByEmail
}
