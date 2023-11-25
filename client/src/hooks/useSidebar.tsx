import { useState } from "react";
import type {
  SideBarMainItemsType,
  SideBarSubItemsType,
} from "../utils/sideBarData";
import { sideBarMain, sideBarSub } from "../utils/sideBarData";

const useSidebar = () => {
  const [sidebarMainItems, setSidebarMainItems] =useState<SideBarMainItemsType[]>(sideBarMain);
  const [sidebarSubItems, setSidebarSubItems] =useState<SideBarSubItemsType[]>(sideBarSub);

  return { sidebarMainItems, sidebarSubItems };
};
export default useSidebar;
