// src/apolloClient.js
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

const httpLink = new HttpLink({
  uri: "http://localhost:5680/graphql", // Replace with your GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const token =async () => {
    return (isAuthenticated ? await getAccessTokenSilently() : "");
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: httpLink,   
    // link: authLink.concat(httpLink)
  cache: new InMemoryCache(),
});

export default client;
