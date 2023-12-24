// Template for static sidebar data

import { v4 } from "uuid";
import type { IconNames } from "../types/reactTypes/iconNamesTypes";

interface SideBarData {
  id: string;
  name: string;
  icon: IconNames;
}
const sideBarMain:SideBarData[] = [
  { id: v4(), name: "All Secrets", icon: "AllSecrets" },
  { id: v4(), name: "Favorites", icon: "Favorite" },
  { id: v4(), name: "Deleted", icon: "Trash" },
];

const sideBarSub: SideBarData[] = [
  { id: v4(), name: "Logins", icon: "Lock" },
  { id: v4(), name: "Payment Cards", icon: "Payment" },
  { id: v4(), name: "Identity", icon: "Id" },
  { id: v4(), name: "Documents", icon: "Document" },
  { id: v4(), name: "Passwords", icon: "Passwords" },
  { id: v4(), name: "Emails", icon: "Email" },
  { id: v4(), name: "Passports", icon: "Passport" },
  { id: v4(), name: "Bank Accounts", icon: "Bank" },
  { id: v4(), name: "Secure Notes", icon: "Notes" },
  { id: v4(), name: "API Keys", icon: "API" },
  { id: v4(), name: "Memberships", icon: "Membership" },
  { id: v4(), name: "Crypto Wallets", icon: "Wallet" },
];
export { sideBarMain, sideBarSub };
