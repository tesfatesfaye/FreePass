import { gql } from "@apollo/client";
import { GraphQLTypes } from "../types/graphqlTypes/graphQLtypes";
import camelCase from "../utils/camelCase";

export const generateCreateMutation = (type: GraphQLTypes, input: []) => {
  const fields: string = input.join();
  return gql`
    mutation Create${camelCase(type)}($input: Create${camelCase(type)}Input!) {
      create${camelCase(type)}(input: $input) {
               ${fields}
      }
    }
  `;
};

export const generateUpdateMutation = (type: GraphQLTypes, input: string[]) => {
  const fields: string = input.join();
  return gql`
    mutation Update${camelCase(type)}($id: ID!, $input: Update${camelCase(
    type
  )}Input!) {
      update${camelCase(type)}(id: $id, input: $input) {
        id
        ${fields}
      }
    }
  `;
};

export const generateDeleteMutation = (type: GraphQLTypes) => {
  return gql`
    mutation Delete${camelCase(type)}($id: ID!) {
      delete${camelCase(type)}(id: $id) {
        id
         
      }
    }
  `;
};
