const { ordersDatabase } = require('./databases/orders')

const cosmos = async () => {
  try {
    const cosmos = {}
    cosmos.ordersDatabase = await ordersDatabase()
    return cosmos
  } catch (error) {
    throw new Error('Failed to create Azure Cosmos DB Client:', error.message)
  }
}

module.exports = cosmos
