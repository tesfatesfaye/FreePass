// Template for static sidebar data

import { v4 } from "uuid";
import type { IconNames } from "../types/reactTypes/iconNamesTypes";

interface SideBarData {
  id: string;
  name: string;
  icon: IconNames;
  color?:string;
}
const sideBarMain: SideBarData[] = [
  { id: v4(), name: "All Secrets", icon: "AllSecrets", color: "#008080" },
  { id: v4(), name: "Favorites", icon: "Favorite", color: "#f3f30dd2" },
  { id: v4(), name: "Deleted", icon: "Trash", color: "#bb2d38" },
];

const sideBarSub: SideBarData[] = [
  { id: v4(), name: "Logins", icon: "Lock", color: "#FFA500" },
  { id: v4(), name: "Payment Cards", icon: "Payment", color: "#e8d4a7" },
  { id: v4(), name: "Drivers License", icon: "Id", color: "#a2c4c9" },
  { id: v4(), name: "Documents", icon: "Document", color: "#e5cca5" },
  { id: v4(), name: "Bank Accounts", icon: "Bank", color: "#79e29a" },
];
export { sideBarMain, sideBarSub };
