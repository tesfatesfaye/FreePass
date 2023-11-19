export const DocumentTypeDefs = `#graphql
type Document {
  id: ID!
  title: String!
  description: String
  fileUpload: String # URL to the file
  user: User!
  avatar: String
  isInFavorites:Boolean
  createdOn: DateTime!
  lastModified: DateTime!
}

type Query {
 document(id: ID!): Document!
}
type Mutation {
  createDocument(document:CreateDocumentInput): Document!
  updateDocument(id:ID!,document:UpdateDocumentInput): Document!
  deleteDocument(id:ID!) :Document
}

input CreateDocumentInput{
  title: String!
  description: String
  fileUpload: String
  avatar: String
  isInFavorites:Boolean
}
input UpdateDocumentInput{
  title: String
  description: String
  fileUpload: String
  avatar: String
  isInFavorites:Boolean

}
`;
