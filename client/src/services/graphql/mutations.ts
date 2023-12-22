import { gql } from "@apollo/client";
import { GraphQLTypes } from "../../types/graphqlTypes/graphQLtypes";
import makeCamelCase from "../../utils/makeCamelCase";

export const generateCreateMutation = (type: GraphQLTypes, input: []) => {
  const fields: string = input.join();
  return gql`
    mutation Create${makeCamelCase(type)}($input: Create${makeCamelCase(
    type
  )}Input!) {
      create${makeCamelCase(type)}(input: $input) {
               ${fields}
      }
    }
  `;
};

export const generateUpdateMutation = (type: GraphQLTypes, input: string[]) => {
  const fields: string = input.join();
  return gql`
    mutation Update${makeCamelCase(
      type
    )}($id: ID!, $input: Update${makeCamelCase(type)}Input!) {
      update${makeCamelCase(type)}(id: $id, input: $input) {
        id
        ${fields}
      }
    }
  `;
};

export const generateDeleteMutation = (type: GraphQLTypes) => {
  return gql`
    mutation Delete${makeCamelCase(type)}($id: ID!) {
      delete${makeCamelCase(type)}(id: $id) {
        id
         
      }
    }
  `;
};
