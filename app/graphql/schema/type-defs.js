const { gql } = require('apollo-server-express')
const { constraintDirectiveTypeDefs } = require('graphql-constraint-directive')
const { nameConstraints, emailConstraints, passwordConstraints, phoneConstraints } = require('./constraints')

const typeDefs = gql`
${constraintDirectiveTypeDefs}

type Query {
  userById(id: ID!): User
  userByEmail(email: String!): User
  allUsers: AllUsers
}

type Mutation {
  createUser(
    name: String! ${nameConstraints}
    email: String! ${emailConstraints}
    password: String! ${passwordConstraints}
    address: String! 
    phone: String! ${phoneConstraints}
  ): UserResponse

  updateUserById(
    id: ID!
    name: String ${nameConstraints}
    email: String ${emailConstraints}
    password: String ${passwordConstraints}
    address: String 
    phone: String ${phoneConstraints}
  ): UserResponse

  deleteUserByEmail(
    email: String!
  ): Status
  
  deleteUserById(
    id: String!
  ): Status
}

type Status {
  code: Int
  success: Boolean
  message: String
}

type User {
  id: ID
  createdAt: String
  name: String!
  email: String!
  password: String!
  address: String!
  phone: String!
}

type UserResponse {
  status: Status
  user: User
}

type AllUsers {
  users: [User]
}
`
module.exports = { typeDefs }
