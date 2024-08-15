const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')
const { generateTimestamp } = require('../../utils')

const createUser = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

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
