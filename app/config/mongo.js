const Joi = require('joi')
const { DEVELOPMENT, TEST, PRODUCTION } = require('../constants/environments')

const schema = Joi.object({
  uri: Joi.string().uri().required(),
  database: Joi.string().default('ch-tab-orders-receiver'),
  options: Joi.object({
    useNewUrlParser: Joi.boolean().default(true),
    useUnifiedTopology: Joi.boolean().default(true)
  }).default({
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})

const config = {
  uri: process.env.MONGO_URI,
  database: process.env.MONGO_ORDERS_DB
}

const { error, value } = schema.validate(config, { abortEarly: false })

value.isDev = (process.env.NODE_ENV === DEVELOPMENT || process.env.NODE_ENV === TEST)
value.isTest = process.env.NODE_ENV === TEST
value.isProd = process.env.NODE_ENV === PRODUCTION

if (error) {
  throw new Error('MongoDB config is invalid:', {
    name: error.name,
    message: error.message,
    stack: error.stack
  })
}

module.exports = value
