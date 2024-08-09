const { ordersDatabase } = require('./databases')

const cosmos = async () => {
  try {
    const cosmos = {}
    cosmos.ordersDatabase = await ordersDatabase()
    return cosmos
  } catch (err) {
    throw new Error(`Failed to create Cosmos DB Client: ${err.message}`)
  }
}

module.exports = cosmos
