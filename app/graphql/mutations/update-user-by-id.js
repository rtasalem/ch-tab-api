const cosmos = require('../../cosmos')
const { cosmosConfig } = require('../../config')
const { EMAIL_REGEX, PASSWORD_REGEX, UK_PHONE_REGEX } = require('../../constants/regex')
const { validate } = require('../../utils')

const updateUserById = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

  const querySpec = {
    query: 'SELECT * FROM users u WHERE u.id = @id',
    parameters: [{ name: '@id', value: `${args.id}` }]
  }

  const response = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.query(querySpec)
    .fetchAll()

  if (!args.id) {
    throw new Error('Must provide an id (id cannot be null)')
  }

  if (!response.resources || response.resources.length === 0) {
    throw new Error(`No user data found for id: ${args.id} (user does not exist)`)
  }

  const item = response.resources[0]

  validate(args.email, EMAIL_REGEX, 'Invalid email format')
  validate(args.password, PASSWORD_REGEX, 'Invalid password format')
  validate(args.phone, UK_PHONE_REGEX, 'Invalid UK phone number format')

  item.name = args.name || item.name
  item.email = args.email || item.email
  item.password = args.password || item.password
  item.address = args.address || item.address
  item.phone = args.phone || item.phone

  const upsertUser = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.upsert(item)

  return {
    status: {
      code: upsertUser.statusCode,
      success: upsertUser.statusCode >= 200 && upsertUser.statusCode < 300,
      message: upsertUser.statusCode >= 200 && upsertUser.statusCode < 300 ? 'User updated successfully' : upsertUser.messages[0].message
    },
    user: item
  }
}

module.exports = {
  updateUserById
}
