export const PaymentTypeDefs = `#graphql
type Payment {
  id: ID!
  nameOfCard: String!
  cardHolderFirstName: String!
  cardHolderLastName: String!
  type: String!
  number: Int!
  securityCode: Int!
  validThrough: DateTime!
  user: User!
  avatar: String
  isInFavorites:Boolean!
  createdOn: DateTime!
  lastModified: DateTime!
}

type Query {
 payment(id: ID!): Payment!
 }
type Mutation {
  createPayment(payment:CreatePaymentInput): Payment!
  updatePayment(id:ID!,payment:UpdatePaymentInput): Payment!
  deletePayment(id:ID!): Payment
 }

input CreatePaymentInput{
  nameOfCard: String!
  cardHolderFirstName: String!
  cardHolderLastName: String!
  type: String!
  number: Int!
  securityCode: Int!
  validThrough: DateTime!
  avatar: String
  isInFavorites:Boolean
}
input UpdatePaymentInput{
  nameOfCard: String
  cardHolderFirstName: String
  cardHolderLastName: String
  type: String
  number: Int
  securityCode: Int
  validThrough: DateTime
  avatar: String
  isInFavorites:Boolean
}


`;
