const { ordersDatabase } = require('./databases/orders')
const { usersDatabase } = require('./databases/users')

const cosmos = async () => {
  try {
    const cosmos = {}
    cosmos.ordersDatabase = await ordersDatabase()
    cosmos.usersDatabase = await usersDatabase()
    return cosmos
  } catch (error) {
    throw new Error('Failed to create Azure Cosmos DB Client:', error.message)
  }
}

module.exports = cosmos
