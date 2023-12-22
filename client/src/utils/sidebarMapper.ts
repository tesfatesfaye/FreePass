import { ElementType, createElement } from "react";

import type { SideBarItemType } from "../types/reactTypes/sideBarType";
// function used for mapping react components
type SidebarItemComponent = ElementType<SideBarItemType>;
const sideBarMapper = (
  items: SideBarItemType[],
  SidebarItem: SidebarItemComponent,
  isOpen: boolean = true,

) => {
  return items.map((item) => {
    return createElement(SidebarItem, { ...item, isOpen ,key:item.id});
  });
};

export { sideBarMapper };
