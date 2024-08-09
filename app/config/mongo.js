const Joi = require('joi')
const { DEVELOPMENT, TEST, PRODUCTION } = require('../constants/environments')

const schema = Joi.object({
  endpoint: Joi.string(),
  key: Joi.string(),
  ordersDatabase: Joi.string().default('ch-tab-orders-receiver'),
  ordersContainer: Joi.string().default('ch-tab-orders')
})

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
}

const { error, value } = schema.validate(config, { abortEarly: false })

value.isDev = (process.env.NODE_ENV === DEVELOPMENT || process.env.NODE_ENV === TEST)
value.isTest = process.env.NODE_ENV === TEST
value.isProd = process.env.NODE_ENV === PRODUCTION

if (error) {
  throw new Error(`The Cosmos DB config is invalid. ${error.message}`)
}

module.exports = value
