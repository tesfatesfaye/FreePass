export const ServiceLoginTypeDefs = `#graphql
type ServiceLogin {
  id: ID!
  email: String
  userName: String
  socialSignIn: Boolean!
  password: String!
  website: String!
  user: User!
  avatar: String
  isInFavorites: Boolean!
  createdOn: DateTime!
  lastModified: DateTime!
}

type Query {
 serviceLogin(id: ID!): ServiceLogin!
}
type Mutation {
  createServiceLogin(serviceLogin:CreateServiceLoginInput): ServiceLogin!
  updateServiceLogin(id:ID!,serviceLogin:UpdateServiceLoginInput): ServiceLogin!
  deleteServiceLogin(id:ID!): ServiceLogin
}

input CreateServiceLoginInput{
  email: String
  userName: String
  socialSignIn: Boolean
  password: String!
  website: String!
  avatar: String
  isInFavorites:Boolean
}
input UpdateServiceLoginInput{
  email: String
  userName: String
  socialSignIn: Boolean
  password: String
  website: String
  avatar: String
  isInFavorites:Boolean

}

`;