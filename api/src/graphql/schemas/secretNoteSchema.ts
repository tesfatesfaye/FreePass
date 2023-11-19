export const SecretNoteTypeDefs = `#graphql
type SecretNote {
  id: ID!
  title: String!
  description: String!
  tags: [String!]
  user: User!
  avatar: String
  isInFavorites: Boolean!
  createdOn: DateTime!
  lastModified: DateTime!
}
type Query {
 secretNote (id: ID!): SecretNote!
}
type Mutation {
  createSecretNote (secretNote: CreateSecretNoteInput!): SecretNote!
  updateSecretNote (id: ID!, secretNote: UpdateSecretNoteInput!): SecretNote!
  deleteSecretNote (id: ID!): SecretNote
}
input CreateSecretNoteInput {
  title: String!
  description: String!
  tags: [String!]
  avatar: String
  isInFavorites: Boolean
}
input UpdateSecretNoteInput {
  title: String
  description: String
  tags: [String!]
  avatar: String
  isInFavorites: Boolean
}
`;
