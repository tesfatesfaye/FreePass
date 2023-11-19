//fake data for texting
const users = [
  {
    email: "alice@example.com",
    userFirstName: "Alice",
    userLastName: "Wonderland",
    password: "alice123",
    profileAvatar: "/images/alice.jpg",
  },
  {
    email: "bob@example.com",
    userFirstName: "Bob",
    userLastName: "Smith",
    password: "bob123",
    profileAvatar: "/images/bob.jpg",
  },
];

const serviceLogins = [
  {
    email: "alice_service@example.com",
    userName: "AliceW",
    socialSignIn: false,
    password: "aliceSecure!",
    website: "https://serviceforalice.com",
    avatar: "/images/alice_service.jpg",
    userId: "526ec9b4-1493-46ba-bdbd-48fd40faca11",
  },
  {
    email: "bob_service@example.com",
    userName: "BobS",
    socialSignIn: false,
    password: "bobSecure!",
    website: "https://serviceforbob.com",
    avatar: "/images/bob_service.jpg",
    userId: "858e8887-c06b-4e09-b743-d5a6d7ac951a",
  },
];

const payments = [
  {
    nameOfCard: "Alice Visa",
    cardHolderFirstName: "Alice",
    cardHolderLastName: "Wonderland",
    type: "Visa",
    number: 4111111111111111,
    securityCode: 123,
    validThrough: new Date("2024-12").toISOString(),
    avatar: "/images/alice_card.jpg",
    userId: "526ec9b4-1493-46ba-bdbd-48fd40faca11"
  },
  {
    nameOfCard: "Bob MasterCard",
    cardHolderFirstName: "Bob",
    cardHolderLastName: "Smith",
    type: "MasterCard",
    number: 5555555555554444,
    securityCode: 321,
    validThrough: new Date("2025-12").toISOString(),
    avatar: "/images/bob_card.jpg",
    userId: "858e8887-c06b-4e09-b743-d5a6d7ac951a"
  },
];

const secretNotes = [
  {
    avatar: "/images/note1.jpg",
    description: "Remember the milk!",
    title: "Grocery Note",
    tags: ["groceries", "reminder"],
    userId: "526ec9b4-1493-46ba-bdbd-48fd40faca11"
  },
  {
    avatar: "/images/note2.jpg",
    description: "Buy the car!",
    title: "Shopping Note",
    tags: ["shopping", "reminder"],
    userId: "858e8887-c06b-4e09-b743-d5a6d7ac951a"
  },
];

const socialSecurityCards = [
  {
    firstName: "Alice",
    lastName: "Wonderland",
    socialSecurityNumber: 123456789,
    dateOfIssue: new Date("2010-05-12").toISOString(),
    userId: "526ec9b4-1493-46ba-bdbd-48fd40faca11"
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    socialSecurityNumber: 987654321,
    dateOfIssue: new Date("2011-06-13").toISOString(),
    userId: "858e8887-c06b-4e09-b743-d5a6d7ac951a"
  },
];

const documents = [
  {
    title: "Alice’s Passport",
    avatar: "/images/passport.jpg",
    description: "Scan of the passport.",
    fileUpload: "/uploads/alice_passport.pdf",
    userId: "526ec9b4-1493-46ba-bdbd-48fd40faca11"
  },
  {
    title: "Bob’s Passport",
    avatar: "/images/passport_bob.jpg",
    description: "Scan of the passport.",
    fileUpload: "/uploads/bob_passport.pdf",
    userId: "858e8887-c06b-4e09-b743-d5a6d7ac951a",
  },
];

export {
  documents,
  payments,
  secretNotes,
  serviceLogins,
  socialSecurityCards,
  users,
};
