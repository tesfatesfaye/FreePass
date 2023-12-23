import type { IconNames } from "./iconNamesTypes";
interface SideBarItemType {
  id: string;
  name: string;
  icon: IconNames;
  isOpen?: boolean;
  
}

export type { SideBarItemType };