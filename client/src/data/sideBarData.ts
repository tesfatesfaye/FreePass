// Template for static sidebar data

import { v4 } from "uuid";

import { SideBarDataType } from "../types/reactTypes/SidebarDataType";


const sideBarMain: SideBarDataType[] = [
  {
    id: v4(),
    name: "All Secrets",
    icon: "AllSecrets",
    color: "#008080",
    
  },
  {
    id: v4(),
    name: "Favorites",
    icon: "Favorite",
    color: "#f3f30dd2",
  },

  { id: v4(), name: "Deleted", icon: "Trash", color: "#bb2d38" },
];

const sideBarSub: SideBarDataType[] = [
  {
    id: v4(),
    name: "Logins",
    icon: "Login",
    color: "#FFA500",
    modalValue: "Login",
  
  },
  {
    id: v4(),
    name: "Payment Cards",
    icon: "Payment",
    color: "#D3D3D3",
    modalValue: "Payment",
  },
  {
    id: v4(),
    name: "Drivers License",
    icon: "Id",
    color: "#a2c4c9",
    modalValue: "Id",
  },
  {
    id: v4(),
    name: "Documents",
    icon: "Document",
    color: "#e5cca5",
    modalValue: "Document",
  },
  {
    id: v4(),
    name: "Bank Accounts",
    icon: "Bank",
    color: "#79e29a",
    modalValue: "Bank",
  
  },
];
export { sideBarMain, sideBarSub };
