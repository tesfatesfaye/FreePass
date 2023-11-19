export const SocialSecurityCardTypeDefs = `#graphql
type SocialSecurityCard {
  id: ID!
  firstName: String!
  lastName: String!
  socialSecurityNumber: Int!
  DateTimeOfIssue: DateTime!
  user: User!
  avatar: String
  isInFavorites: Boolean!
  createdOn: DateTime!
  lastModified: DateTime!
}

type Query {
 socialSecurityCard(id: ID!): SocialSecurityCard!
}
type Mutation {
  createSocialSecurityCard(socialSecurityCard:CreateSocialSecurityCardInput): SocialSecurityCard!
  updateSocialSecurityCard(id:ID!,socialSecurityCard:UpdateSocialSecurityCardInput): SocialSecurityCard!
  deleteSocialSecurityCard(id:ID!): SocialSecurityCard
}

input CreateSocialSecurityCardInput{
  firstName: String!
  lastName: String!
  socialSecurityNumber: Int!
  DateTimeOfIssue: DateTime!
  avatar: String
  isInFavorites:Boolean
}
input UpdateSocialSecurityCardInput{
  firstName: String
  lastName: String
  socialSecurityNumber: Int
  DateTimeOfIssue: DateTime
  avatar: String
  isInFavorites:Boolean
}
`;
