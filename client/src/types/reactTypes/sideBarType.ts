import icons from "../../components/icons/IconLibrary";
type IconNames = keyof typeof icons;
interface SideBarItemType {
  id: string;
  name: string;
  icon: IconNames;
  isOpen?: boolean;
  
}

export type { SideBarItemType };