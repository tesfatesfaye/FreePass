import * as dotenv from "dotenv";
import {expressjwt,GetVerificationKey} from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
dotenv.config();

export const checkJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }) as GetVerificationKey ,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});
