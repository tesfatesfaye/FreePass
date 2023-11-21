import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import "./App.css";
import Profile from "./components/Profile";
import client from "./graphql/apolloClient";
const App: FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Profile />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </ApolloProvider>
      {/* )}  */}
    </div>
  );
};

export default App;
