const cosmosClient = require('../client')
const { cosmosConfig } = require('../../config')

const ordersDatabase = async () => {
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: cosmosConfig.ordersDatabase
    })
    await database.containers.createIfNotExists({
      id: cosmosConfig.ordersContainer
    })

    return database
  } catch (err) {
    throw new Error(`Failed to create Orders database: ${err.message}`)
  }
}

module.exports = { ordersDatabase }
