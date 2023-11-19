import { DateTimeResolver } from "graphql-scalars";
// import {queryFunctionSingle,mutationFunction,  User,} from "../../utils/resolverFunctionGenerators.js";
import { queryFunctionSingle,queryFunctionAll } from "./queryGenerator";
import { mutationFunctions } from "./mutatorGenerator";
export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    ...queryFunctionSingle("user"),
    ...queryFunctionSingle("payment"),
    ...queryFunctionSingle("serviceLogin"),
    ...queryFunctionSingle("secretNote"),
    ...queryFunctionSingle("document"),
  },
  Mutation: {
    ...mutationFunctions("user"),
    ...mutationFunctions("payment"),
    ...mutationFunctions("serviceLogin"),
    ...mutationFunctions("secretNote"),
    ...mutationFunctions("document"),
  },
  User: {
    payments: queryFunctionAll("payment"),
    serviceLogins: queryFunctionAll("serviceLogin"),
    documents: queryFunctionAll("document"),
    socialSecurityCards: queryFunctionAll("socialSecurityCard"),
    secretNotes: queryFunctionAll("secretNote"),
  },
};

