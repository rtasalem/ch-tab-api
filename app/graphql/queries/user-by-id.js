const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')

const userById = async (_root, args, context) => {
  try {
    const { usersDatabase } = await cosmos()

    const querySpec = {
      query: 'SELECT * FROM users u WHERE u.id = @id',
      parameters: [{ name: '@id', value: `${args.id}` }]
    }

    const response = await usersDatabase
      .container(cosmosConfig.usersContainer)
      .items.query(querySpec)
      .fetchAll()

    return {
      id: response.resources[0]?.id,
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

module.exports = { userById }
