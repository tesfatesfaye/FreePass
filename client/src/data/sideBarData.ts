// Template for static sidebar data

import { v4 as uuidv4 } from "uuid";

const sideBarMain = [
  { id: uuidv4(), name: "All Secrets", icon: "AllSecrets" },
  { id: uuidv4(), name: "Favorites", icon: "Favorite" },
  { id: uuidv4(), name: "Deleted", icon: "Trash" },
];

const sideBarSub = [
  { id: uuidv4(), name: "Login", icon: "Lock" },
  { id: uuidv4(), name: "Credit Card", icon: "Payment" },
  { id: uuidv4(), name: "Identity", icon: "Id" },
  { id: uuidv4(), name: "Documents", icon: "Document" },
];
export { sideBarMain, sideBarSub };
