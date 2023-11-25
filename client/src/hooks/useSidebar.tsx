import { useState } from "react";
import type { SideBarItem } from "../types/reactTypes/sideBarType";
import { sideBarMain, sideBarSub } from "../utils/sideBarData";

const useSidebar = () => {
  const [sidebarMainItems, setSidebarMainItems] =
    useState<SideBarItem[]>(sideBarMain);
  const [sidebarSubItems, setSidebarSubItems] =
    useState<SideBarItem[]>(sideBarSub);

  return { sidebarMainItems, sidebarSubItems };
};
export default useSidebar;
