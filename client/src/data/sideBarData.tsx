// Template for static sidebar data

import { v4 } from "uuid";
import type { IconNames } from "../types/reactTypes/iconNamesTypes";

interface SideBarData {
  id: string;
  name: string;
  icon: IconNames;
  color?: string;
  isCategory?: boolean;
  updateCurrentModal?: () => void;
}
const sideBarMain: SideBarData[] = [
  { id: v4(), name: "All Secrets", icon: "AllSecrets", color: "#008080" },
  { id: v4(), name: "Favorites", icon: "Favorite", color: "#f3f30dd2" },
  { id: v4(), name: "Deleted", icon: "Trash", color: "#bb2d38" },
];


const sideBarSub: SideBarData[] = [
  {
    id: v4(),
    name: "Logins",
    icon: "Login",
    color: "#FFA500",
    isCategory: true,

  },
  {
    id: v4(),
    name: "Payment Cards",
    icon: "Payment",
    color: "#D3D3D3",
    isCategory: true,

  },
  {
    id: v4(),
    name: "Drivers License",
    icon: "Id",
    color: "#a2c4c9",
    isCategory: true,

  },
  {
    id: v4(),
    name: "Documents",
    icon: "Document",
    color: "#e5cca5",
    isCategory: true,
  
  },
  {
    id: v4(),
    name: "Bank Accounts",
    icon: "Bank",
    color: "#79e29a",
    isCategory: true,
  
  },
];
export { sideBarMain, sideBarSub };
