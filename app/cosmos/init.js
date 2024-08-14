const fs = require('fs')
const path = require('path')

const initCosmos = async () => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

    const databasesDir = path.join(__dirname, './databases')
    const files = fs.readdirSync(databasesDir)

    const createDatabases = files.map(async file => {
      const databaseName = `${file.split('.')[0]}Database`
      const db = require(`./databases/${file}`)
      return db[databaseName]()
    })

    const result = await Promise.allSettled(createDatabases)
    result.forEach(res => {
      if (res.status === 'rejected') {
        throw new Error(res.reason.message)
      }
    })
  } catch (error) {
    throw new Error('Failed to initialise Azure Cosmos DB:', error.message)
  }
}

module.exports = { initCosmos }
