import { ApolloProvider } from "@apollo/client";
// import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import "./App.css";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import client from "./graphql/apolloClient";
interface ProfileProps {
  name: string;
  email: string;
  picture?: string;
}

const App: FC = () => {
  // const { user, isAuthenticated} = useAuth0<ProfileProps>();

  return (
    <div className="App">
      {/* <LoginButton />
      <LogoutButton /> */}
      {/* {isAuthenticated && user && ( */}
      <ApolloProvider client={client}>
        <Profile />
      </ApolloProvider>
      {/* )}  */}
    </div>
  );
};

export default App;
