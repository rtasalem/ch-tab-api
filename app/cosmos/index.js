const { ordersDatabase } = require('./databases')

const cosmos = async () => {
  try {
    const cosmos = {}
    cosmos.ordersDatabase = await ordersDatabase()
    return cosmos
  } catch (error) {
    throw new Error('Failed to create Cosmos DB Client:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    })
  }
}

module.exports = cosmos
