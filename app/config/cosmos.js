const Joi = require('joi')

const schema = Joi.object({
  endpoint: Joi.string(),
  key: Joi.string(),
  ordersDatabase: Joi.string().default('ch-tab-orders'),
  ordersContainer: Joi.string().default('orders'),
  usersDatabase: Joi.string().default('ch-tab-users'),
  usersContainer: Joi.string().default('users')
})

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
}

const { error, value } = schema.validate(config, { abortEarly: false })

if (error) {
  throw new Error(`Azure Cosmos DB config is invalid. ${error.message}`)
}

module.exports = value
