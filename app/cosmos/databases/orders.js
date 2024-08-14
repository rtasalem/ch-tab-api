const cosmosClient = require('../client')
const { cosmosConfig } = require('../../config')

const ordersDatabase = async () => {
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: cosmosConfig.ordersDatabase
    })
    await database.containers.createIfNotExists({
      id: cosmosConfig.ordersContainer,
      partitionKey: { paths: ['/id'] }
    })

    return database
  } catch (error) {
    throw new Error('Failed to create orders database:', error.message)
  }
}

module.exports = { ordersDatabase }
