import { IconNames } from "./iconNamesTypes";
import { SecretCategoryTypes } from "./SecretCategoryTypes";
interface SideBarDataType {
  id: string;
  name: string;
  icon: IconNames;
  color?: string;
  modalValue?: SecretCategoryTypes;
}

export type { SideBarDataType };