const { MongoClient } = require('mongodb')
const { mongoConfig } = require('../config')

const initMongo = async () => {
  try {
    const mongoClient = new MongoClient(mongoConfig.uri, mongoConfig.options, { tlsAllowInvalidCertificates: true })
    await mongoClient.connect()
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

module.exports = {
  initMongo
}
