const cosmosClient = require('../client')
const { cosmosConfig } = require('../../config')

const usersDatabase = async () => {
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: cosmosConfig.usersDatabase,
      throughput: 400
    })
    await database.containers.createIfNotExists({
      id: cosmosConfig.usersContainer,
      partitionKey: { paths: ['/id'] }
    })

    return database
  } catch (error) {
    throw new Error('Failed to create users database:', error.message)
  }
}

module.exports = { usersDatabase }
