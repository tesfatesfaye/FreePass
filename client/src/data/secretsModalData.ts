import { v4 } from "uuid";

const loginModalData = [
  { id: v4(), type: "text", placeholder: "username", name: "username" },
  {
    id: v4(),
    type: "email",
    placeholder: "abc@example.com",
    name: "email",
  },
  { id: v4(), type: "password", placeholder: "password", name: "password" },
  { id: v4(), type: "url", placeholder: "http://google.com", name: "url" },
];


const paymentModalData = [
  { id: v4(), type: "text", placeholder: "Card Holder Name", name: "name" },
  { id: v4(), type: "text", placeholder: "Card Number", name: "cardNumber" },
  { id: v4(), type: "text", placeholder: "PIN", name: "pin" },
  { id: v4(), type: "text", placeholder: "Card Type", name: "cardType" },
  { id: v4(), type: "text", placeholder: "Card Expiry Date", name: "expiry" },
  { id: v4(), type: "text", placeholder: "Card CVV", name: "cvv" },
];

const idCardModalData = [
  { id: v4(), type: "text", placeholder: "full name", name: "name" },
  { id: v4(), type: "text", placeholder: "id number", name: "idNumber" },
  { id: v4(), type: "text", placeholder: "id type", name: "idType" },
  { id: v4(), type: "text", placeholder: "valid till", name: "valid till" },
];


export { loginModalData, paymentModalData, idCardModalData };