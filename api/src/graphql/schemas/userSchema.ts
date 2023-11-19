export const UserTypeDefs = `#graphql
type User {
  id: ID!
  email: String!
  userFirstName: String!
  userLastName: String!
  profileAvatar: String
  serviceLogins: [ServiceLogin!]
  payments: [Payment!]
  secretNotes: [SecretNote!]
  socialSecurityCards: [SocialSecurityCard!]
  documents: [Document!]
  createdOn: DateTime!
  lastModified: DateTime!
}
 type Query {
  user(id: ID!): User!
  serviceLoginsByUserId(id: ID!): [ServiceLogin!]
  paymentsByUserId(id: ID!): [Payment!]
  secretNotesByUserId(id: ID!): [SecretNote!]
  socialSecurityCardsByUserId(id: ID!): [SocialSecurityCard!]
  documentsByUserId(id: ID!): [Document!]
  }

type Mutation {
  createUser(user:CreatesUserInput): User!
  updateUser(id: ID!, user:UpdateUserInput): User!
  deleteUser(id: ID!): User
}
input CreatesUserInput {
  email: String!
  userFirstName: String!
  userLastName: String!
  password: String!
  profileAvatar: String
}

input UpdateUserInput {
  email: String
  userFirstName: String
  userLastName: String
  password: String
  profileAvatar: String
}



`;
