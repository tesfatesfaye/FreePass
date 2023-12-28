import type { IconNames } from "./iconNamesTypes";
import { SideBarDataType } from "./SidebarDataType";

interface SideBarItemType extends SideBarDataType {
  subtype?: IconNames;
  modalValue?: string;
  isOpen?: boolean;
}

export type { SideBarItemType };