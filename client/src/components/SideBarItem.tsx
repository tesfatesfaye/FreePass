import { FC, useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import type { SideBarItemType } from "../types/reactTypes/sideBarType";
const SideBarItem: FC<SideBarItemType> = (props) => {
  const { sideBarItemIsSelected, toggleSideBarItemSelection } =
    useContext(DashboardContext);
  return (
    <div
      key={props.id}
      onClick={() => toggleSideBarItemSelection(props.name)}
      className={`flex text-white items-center gap-2  ml-2 cursor-pointer 
          mr-auto overflow-hidden transition-all duration-300
          ${props.isOpen ? " mb-3 h-auto" : "m-0 p-0 h-0"} ${
        props.name === sideBarItemIsSelected ? `text-font-selected-dark` : ``
      } `}
    >
      <props.icon />
      {props.name}
    </div>
  );
};
export default SideBarItem;
