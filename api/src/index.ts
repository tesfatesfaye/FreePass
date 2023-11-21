import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import  express ,{Application} from "express";
import { auth } from "express-openid-connect";
import { resolvers } from "./graphql/resolvers/resolversIndex";
import { typeDefs } from "./graphql/schemas/schemaIndex";
import prisma from "./prisma/prismaClient";
import { authConfig } from "./middleware/authConfig";
import {checkJwt} from "./middleware/checkjwt"
const app: Application = express(); 
const startApolloServer = async () => {
  const PORT = process.env.PORT || 5680;
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
    context: () => {
    return { prisma };
  },
});

app.use(
  cors({
    origin: "http://localhost:5173", // React app's URL
    credentials: true,
  })
);
// app.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.json({ message: "Hello from Express!" });
// });

// app.use(auth(authConfig));
// app.use(checkJwt);

startApolloServer();
