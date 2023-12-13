import { useState } from "react";
import type { SideBarItemType } from "../types/reactTypes/sideBarType";
import { sideBarMain, sideBarSub } from "../data/sideBarData";

const useSidebar = () => {
  const [sidebarMainItems, setSidebarMainItems] =
    useState<SideBarItemType[]>(sideBarMain);
    const [sidebarSubItems, setSidebarSubItems] =
    useState<SideBarItemType[]>(sideBarSub);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
      useState<boolean>(true);
    const [isTagsDropdownOpen, setIsTagsDropdownOpen] =useState<boolean>(true);
    const toggleCategoriesDropdown = () => {
      setIsCategoriesDropdownOpen(prev=>!prev);
    };
    const toggleTagsDropdown = () => {
      setIsTagsDropdownOpen(prev=>!prev);
    };

  return {
    sidebarMainItems,
    sidebarSubItems,
    isCategoriesDropdownOpen,
    isTagsDropdownOpen,
    toggleCategoriesDropdown,
    toggleTagsDropdown,
    
    
  };
};
export default useSidebar;
