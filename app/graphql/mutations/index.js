const { createUser } = require('./create-user')
const { deleteUserById } = require('./delete-user-by-id')
const { deleteUserByEmail } = require('./delete-user-by-email')
const { updateUserById } = require('./update-user-by-id')

module.exports = {
  createUser,
  deleteUserById,
  deleteUserByEmail,
  updateUserById
}
