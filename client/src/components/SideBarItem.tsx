import type { SideBarItemType } from "../types/reactTypes/sideBarType";
import type { FC } from "react";
const SideBarItem: FC<SideBarItemType> = (props) => {
  return (
    <div
      key={props.id}
      className={`flex text-white items-center gap-2 font-semibold ml-2 cursor-pointer 
          mr-auto overflow-hidden transition-all duration-300
          ${props.isOpen ? " mb-3 h-auto" : "m-0 p-0 h-0"}`}
    >
      <props.icon />
      {props.name}
    </div>
  );
};
export default SideBarItem;