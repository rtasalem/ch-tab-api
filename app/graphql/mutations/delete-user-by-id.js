const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')

const deleteUserById = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

  const querySpec = {
    query: 'SELECT * FROM users u WHERE u.id = @id',
    parameters: [{ name: '@id', value: args.id }]
  }

  const { resources } = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.query(querySpec)
    .fetchAll()

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
  deleteUserById
}
