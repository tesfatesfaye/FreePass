import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import "./App.css";
import Profile from "./components/Profile";
import client from "./graphql/apolloClient";
const App: FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Profile />
        </ApolloProvider>
    </div>
  );
};

export default App;
