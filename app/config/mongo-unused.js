const Joi = require('joi')

const schema = Joi.object({
  uri: Joi.string().uri().required(),
  database: Joi.string().default('ch-tab-orders-receiver'),
  collection: Joi.string().default('orders-collection')
})

const config = {
  uri: process.env.MONGO_URI,
  database: process.env.MONGO_ORDERS_DB,
  collection: process.env.MONGO_ORDERS_COLLECTION
}

const { error, value } = schema.validate(config, { abortEarly: false })

if (error) {
  throw new Error('MongoDB config is invalid:', {
    name: error.name,
    message: error.message,
    stack: error.stack
  })
}

module.exports = value
