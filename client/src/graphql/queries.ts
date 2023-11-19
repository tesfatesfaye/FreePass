import {gql } from '@apollo/client';
import camelCase from '../utils/camelCase.js';
import { GraphQLTypes } from '../types/graphQLtypes.js';
export const generateQuery = (type: GraphQLTypes,input:string[]) => {
    const fields:string=input.join()
      return gql`
    query Get${camelCase(type)}($id: ID!) {
      ${type}(id: $id) {
        ${fields}
      }
    }
  `;
};
