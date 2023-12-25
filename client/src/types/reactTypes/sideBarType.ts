import type { IconNames } from "./iconNamesTypes";
interface SideBarItemType {
  id: string;
  name: string;
  icon: IconNames;
  isOpen?: boolean;
  subtype?: IconNames;
  color?:string;
  
}

export type { SideBarItemType };