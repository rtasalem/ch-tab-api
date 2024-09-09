const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')
const { EMAIL_REGEX, PASSWORD_REGEX, UK_PHONE_REGEX } = require('../../constants/reg-ex')
const { generateTimestamp } = require('../../utils')

const createUser = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

  const validate = (value, regex, error) => {
    if (!regex.test(value)) {
      throw new Error(error)
    }
  }

  validate(args.email, EMAIL_REGEX, 'Invalid email format')
  validate(args.password, PASSWORD_REGEX, 'Invalid password format')
  validate(args.phone, UK_PHONE_REGEX, 'Invalid UK phone number format')

  const item = {
    createdAt: generateTimestamp(),
    name: args.name,
    email: args.email,
    password: args.password,
    address: args.address,
    phone: args.phone
  }

  const response = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.create(item)

  return {
    status: {
      code: response.statusCode,
      success: response.statusCode >= 200 && response.statusCode < 300,
      message: response.statusCode >= 200 && response.statusCode < 300 ? 'User created successfully' : response.messages[0].message
    },
    user: {
      ...response.resource
    }
  }
}

module.exports = {
  createUser
}
