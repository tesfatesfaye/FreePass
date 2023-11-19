import { Auth0Provider } from "@auth0/auth0-react";
import { FC, ReactNode } from "react";
interface CustomAuth0ProviderProps {
  children: ReactNode;
}
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const auth0Audience=import.meta.env.VITE_AUDIENCE

const AuthProvider :FC<CustomAuth0ProviderProps>= ({ children}) => {
  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
        audience:auth0Audience
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
