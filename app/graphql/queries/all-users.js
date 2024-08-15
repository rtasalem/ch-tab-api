const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')

const allUsers = async (_root, args, context) => {
  try {
    const { usersDatabase } = await cosmos()

    const querySpec = {
      query: 'SELECT * FROM users s'
    }

    const response = await usersDatabase
      .container(cosmosConfig.usersContainer)
      .items.query(querySpec)
      .fetchAll()

    return {
      users: response.resources.map((x) => ({
        userId: x.id,
        createdAt: x.createdAt,
        name: x.name,
        email: x.email,
        password: x.password,
        address: x.address,
        phone: x.phone
      }))
    }
  } catch (error) {
    throw new Error(`Query failed: ${error.message}`)
  }
}

module.exports = {
  allUsers
}
