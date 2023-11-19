import dotenv from "dotenv";

dotenv.config();

export const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: "http://localhost:5680", // Your Express server URL
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
};
