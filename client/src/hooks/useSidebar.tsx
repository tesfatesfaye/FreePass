import { useState } from "react";
import type { SideBarItem } from "../types/reactTypes/sideBarType";
import { sideBarMain, sideBarSub } from "../utils/sideBarData";

const useSidebar = () => {
  const [sidebarMainItems, setSidebarMainItems] =
    useState<SideBarItem[]>(sideBarMain);
  const [sidebarSubItems, setSidebarSubItems] =
    useState<SideBarItem[]>(sideBarSub);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
      useState<boolean>(true);
    const [isTagsDropdownOpen, setIsTagsDropdownOpen] =useState<boolean>(true);
    const toggleCategoriesDropdown = () => {
      setIsCategoriesDropdownOpen(prev=>!prev);
    };
    const toggleTagsDropdown = () => {
      setIsTagsDropdownOpen(prev=>!prev);
    };

  return { sidebarMainItems, sidebarSubItems, isCategoriesDropdownOpen, isTagsDropdownOpen, toggleCategoriesDropdown, toggleTagsDropdown };
};
export default useSidebar;
