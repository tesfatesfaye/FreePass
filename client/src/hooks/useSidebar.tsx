import { useState } from "react";
import { sideBarMain, sideBarSub } from "../data/sideBarData";
import type { SideBarItemType } from "../types/reactTypes/SideBarTypes";
import SideBarItem from "../components/sidebar/SideBarItem";

const useSidebar = () => {
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState<boolean>(true);
  const [sidebarMainItems] =
    useState<SideBarItemType[]>(sideBarMain);
  const [sidebarSubItems] = useState<SideBarItemType[]>(
    () =>
      sideBarSub.map((item) => ({
        ...item,
        isOpen: isCategoriesDropdownOpen,
      }))
  );
    
  const [isTagsDropdownOpen, setIsTagsDropdownOpen] = useState<boolean>(true);
  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen((prev) => !prev);
  };
  const toggleTagsDropdown = () => {
    setIsTagsDropdownOpen((prev) => !prev)
        };
      
      const SidebarSubMapped = sidebarSubItems.map((item) => (
        <SideBarItem
          key={item.id}
          {...item}
          isOpen={isCategoriesDropdownOpen}
        />
      ));
  return {
    sidebarMainItems,
    isCategoriesDropdownOpen,
    isTagsDropdownOpen,
    toggleCategoriesDropdown,
    toggleTagsDropdown,
    SidebarSubMapped,
  };
};
export default useSidebar;
