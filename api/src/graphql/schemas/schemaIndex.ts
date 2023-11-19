import { DateTimeTypeDefs } from "../scalars/DateTime";
import { DocumentTypeDefs } from "./documentSchema";
import { PaymentTypeDefs } from "./paymentSchema";
import { SecretNoteTypeDefs } from "./secretNoteSchema";
import { ServiceLoginTypeDefs } from "./serviceLoginSchema";
import { SocialSecurityCardTypeDefs } from "./socialSecurityCardSchema";
import { UserTypeDefs } from "./userSchema";
// all the schemas combined
export const typeDefs = [
  UserTypeDefs,
  ServiceLoginTypeDefs,
  PaymentTypeDefs,
  SecretNoteTypeDefs,
  SocialSecurityCardTypeDefs,
  DocumentTypeDefs,
  DateTimeTypeDefs,
];
