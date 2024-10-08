const { gql } = require('apollo-server-express')
const { constraintDirectiveTypeDefs } = require('graphql-constraint-directive')
const { nameConstraints } = require('./constraints')

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
    email: String! 
    password: String! 
    address: String!
    phone: String! 
  ): UserResponse

  updateUserById(
    id: ID!
    name: String ${nameConstraints}
    email: String
    password: String
    address: String 
    phone: String
  ): UpdatedUserResponse

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

type UpdatedUser {
  id: ID
  createdAt: String
  name: String
  email: String
  password: String
  address: String
  phone: String
}

type UserResponse {
  status: Status
  user: User
}
type UpdatedUserResponse {
  status: Status
  user: UpdatedUser
}

type AllUsers {
  users: [User]
}
`
module.exports = { typeDefs }
