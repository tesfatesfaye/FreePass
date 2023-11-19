/*
  Warnings:

  - You are about to drop the column `cardholderName` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SocialSecurityCard` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `SocialSecurityCard` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `cardHolderFirstName` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardHolderlastName` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialSecurityNumber` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `SocialSecurityCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `SocialSecurityCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialSecurityNumber` to the `SocialSecurityCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userFirstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userLastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "cardholderName",
DROP COLUMN "number",
ADD COLUMN     "cardHolderFirstName" TEXT NOT NULL,
ADD COLUMN     "cardHolderlastName" TEXT NOT NULL,
ADD COLUMN     "socialSecurityNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SocialSecurityCard" DROP COLUMN "name",
DROP COLUMN "number",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "socialSecurityNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "userFirstName" TEXT NOT NULL,
ADD COLUMN     "userLastName" TEXT NOT NULL;
