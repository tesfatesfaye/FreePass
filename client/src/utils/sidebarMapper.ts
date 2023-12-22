import { ElementType, createElement } from "react";
import { v4 as uuid4 } from "uuid";
import type { SideBarItemType } from "../types/reactTypes/sideBarType";
// function used for mapping react components
type SidebarItemComponent = ElementType<SideBarItemType>;
const sideBarMapper = (
  items: SideBarItemType[],
  SidebarItem: SidebarItemComponent,
  isOpen: boolean = true,
  id: string=uuid4()
) => {
  return items.map((item) => {
    return createElement(SidebarItem, { ...item, isOpen ,id});
  });
};

export { sideBarMapper };
