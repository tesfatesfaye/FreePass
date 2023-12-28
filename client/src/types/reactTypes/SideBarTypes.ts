import type { IconNames } from "./iconNamesTypes";
import { SideBarDataType } from "./SidebarDataType";

interface SideBarItemType extends SideBarDataType {
  subtype?: IconNames;
    isOpen?: boolean;
}

export type { SideBarItemType };