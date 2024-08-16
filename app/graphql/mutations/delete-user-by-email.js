const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')

const deleteUserByEmail = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

  const querySpec = {
    query: 'SELECT * FROM users u WHERE u.email = @email',
    parameters: [{ name: '@email', value: `${args.email}` }]
  }

  const { resources } = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.query(querySpec)
    .fetchAll()

  if (!resources || resources.length === 0) {
    return {
      code: 404,
      success: false,
      message: 'User not found'
    }
  }

  const user = resources[0]

  const response = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .item(user.id, user.id)
    .delete()

  return {
    code: response.statusCode,
    success: response.statusCode >= 200 && response.statusCode < 300,
    message: response.statusCode >= 200 && response.statusCode < 300 ? 'User deleted successfully' : response.message
  }
}

module.exports = {
  deleteUserByEmail
}
