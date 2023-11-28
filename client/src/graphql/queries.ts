import { gql } from "@apollo/client";
import { GraphQLTypes } from "../types/graphqlTypes/graphQLtypes";
import camelCase from "../utils/camelCase";
export const generateQuery = (type: GraphQLTypes, input: string[]) => {
  const fields: string = input.join();
  return gql`
    query Get${camelCase(type)}($id: ID!) {
      ${type}(id: $id) {
        ${fields}
      }
    }
  `;
};
