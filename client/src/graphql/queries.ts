import { gql } from "@apollo/client";
import { GraphQLTypes } from "../types/graphqlTypes/graphQLtypes";
import makeCamelCase from "../utils/makeCamelCase";
export const generateQuery = (type: GraphQLTypes, input: string[]) => {
  const fields: string = input.join();
  return gql`
    query Get${makeCamelCase(type)}($id: ID!) {
      ${type}(id: $id) {
        ${fields}
      }
    }
  `;
};
