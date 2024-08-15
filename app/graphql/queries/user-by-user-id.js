const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')

const userByUserId = async (_root, args, context) => {
  try {
    const { usersDatabase } = await cosmos()

    const querySpec = {
      query: 'SELECT * FROM users u WHERE u.userId = @userId',
      parameters: [{ name: '@userId', value: `${args.userId}` }]
    }

    const response = await usersDatabase
      .container(cosmosConfig.usersContainer)
      .items.query(querySpec)
      .fetchAll()

    if (!args.userId) {
      throw new Error('userId must be provided')
    }

    if (!response.resources.length) {
      throw new Error(`No user data found for userId ${args.userId}`)
    }

    return {
      userId: response.resources[0]?.id,
      createdAt: response.resources[0]?.createdAt,
      name: response.resources[0]?.name,
      email: response.resources[0]?.email,
      password: response.resources[0]?.password,
      address: response.resources[0]?.address,
      phone: response.resources[0]?.phone
    }
  } catch (error) {
    throw new Error(`Query failed: ${error.message}`)
  }
}

module.exports = { userByUserId }
