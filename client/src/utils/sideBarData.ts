// Type: Utility
import React from "react";
import {
  FaIdCard as Id,
  FaKey as KeyIcon,
  FaRegTrashAlt as Trash,
} from "react-icons/fa";
import {
  FaLayerGroup as AllSecrets,
  FaCreditCard as Payment,
} from "react-icons/fa6";
import { IoStarOutline as Favorite,IoDocumentText as Document } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
interface SideBarMainItemsType {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface SideBarSubItemsType {
  id: string;
  name: string;
  icon: React.ElementType;
}



const sideBarMain = [
  { id: uuidv4(), name: "All Secrets", icon: AllSecrets },
  { id: uuidv4(), name: "Favorites", icon: Favorite },
  { id: uuidv4(), name: "Trash", icon: Trash },
];

const sideBarSub = [
  { id: uuidv4(), name: "ServiceLogin", icon: KeyIcon },
  { id: uuidv4(), name: "Credit Card", icon: Payment },
  { id: uuidv4(), name: "Identity", icon: Id },
  {id: uuidv4(),name:"Documents",icon:Document}
];
export { sideBarMain, sideBarSub};
export type { SideBarMainItemsType, SideBarSubItemsType };