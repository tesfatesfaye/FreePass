import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import "./assets/App.css";
import Profile from "./components/Profile";
import client from "./services/graphql/apolloClient";
const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>
  );
};

export default App;
