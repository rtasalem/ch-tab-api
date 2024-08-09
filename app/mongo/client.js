const { MongoClient } = require('mongodb')
const { mongoConfig } = require('../config')

module.exports = new MongoClient(mongoConfig.uri, mongoConfig.options)
