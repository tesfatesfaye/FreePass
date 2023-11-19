import prisma from "../prisma/prismaClient.js";
import {
  documents,
  payments,
  secretNotes,
  serviceLogins,
  socialSecurityCards,
  users,
} from "./seedData.js";

const serviceLogin = await prisma.user.update({
  where: {
    id: '526ec9b4-1493-46ba-bdbd-48fd40faca11',
  },
  data: {
    serviceLogins: {
      create: {
        email: 'login@example.com',
        userName: 'AliceLogin',
        socialSignIn: false,
        password: 'login123',
        website: 'www.example.com',
        // ...other fields if needed...
      },
    },
  },
}).catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
console.log("Seeding...");

const allUsers = await prisma.user.findMany();
console.log(allUsers);

